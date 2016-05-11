refresh = function(){
	var display = $('#spouts').children();
	var command = {
		spouts : [{
			drink : 'none',
			state: 'ready',
		},
		{
			drink : 'none',
			state : 'ready',
		},
		{
			drink : 'none',
			state : 'ready',
		},
		{
			drink : 'none',
			state : 'ready',
		}],
		order:{
			drinks : [],
			total : 0,
			valid : false,
			payment : 'pending',
			waiting: false,
		},
		serving : '',
	};	var messageUno = [0,0,0,0,0,'z'];
	var i = 0;

	_.each( display, function(element, index, value){
		command.spouts[index].drink = $(element).find('.drink').data('item');

		if(_.isNumber($(element).find('.drink').data('price'))){
			
			switch($(element).find('.drink').data('item')){
				case 'expresso':
				messageUno[index] = 1;
				break;
				case 'lungo':
				messageUno[index] = 2;
				break;
				default:
				messageUno[index] = 1;
			};

			command.order.drinks[i] = {
				drink : $(element).find('.drink').data('item'),
				price : Number($(element).find('.drink').data('price')),
			};

			command.order.total += Number($(element).find('.drink').data('price'));
			i++; command.order.valid = true;
			command.spouts[index].state = 'ready';

		}
		else{
			command.spouts[index].drink = 'none';
			command.spouts[index].state = 'available';
			$(element).empty();
			messageUno[index] = 0;
		}
	});


	var temp = $('#spouts').clone();
	temp.find('.remove').remove();
	command.serving = String(temp.html());
	Meteor.call('updateState',command);
	
	messageUno[4] = 0;
	if (FlowRouter._current.path === '/payment') {messageUno[4] = 1;}
	messageUno[5] = 'z';
	messageUno = messageUno.toString().replace(/,/g, '');
	Meteor.call('sendToSerialPort',messageUno);

	return command;
}


Tracker.autorun(function () {
	var waiting = State.findOne({name: 'command'});
	console.log(waiting);
	if ( waiting ) {
		console.log("waiting");

		if (waiting.command.order.waiting) {
			console.log("reset")
			setTimeout(function(){
				var display = $("#spouts").children().empty();
				FlowRouter.go("/home");
				refresh();
			}, 2000);
		}
	}
});