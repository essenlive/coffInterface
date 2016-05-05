// Refresh receipt
Meteor.startup(function(){
	Session.set('command', {} );
	refresh();
});

refresh = function(){
	var display = $("#spouts").children();
	var spouts = [];
	var drinks = [];
	var total = 0;
	var valid = false;
	var messageUno = [0,0,0,0,0,9];
	var i = 0;

	_.each( display, function(element, index, value){
		spouts[index] = $(element).find('.drink').data("item");
		
		if ( !$(element).find('.drink').data("item") ){
			messageUno[index] = 0;
		}
		
		else {
			switch($(element).find('.drink').data("item")){
				case "expresso":
				messageUno[index] = 1;
				break;
				case "lungo":
				messageUno[index] = 2;
				break;
				default:
				messageUno[index] = 3;
			};
		};
		

		if(_.isNumber($(element).find('.drink').data("price"))){
			
			switch($(element).find('.drink').data("item")){
				case "expresso":
				messageUno[index] = 1;
				break;
				case "lungo":
				messageUno[index] = 2;
				break;
				default:
				messageUno[index] = 3;
			};

			drinks[i] = {
				drink : $(element).find('.drink').data("item"),
				price : Number($(element).find('.drink').data("price")),
			};

			total += Number($(element).find('.drink').data("price"));
			i++; valid = true;
		}
		else{
			$(element).removeClass('ready');
			$(element).empty();
			messageUno[index] = 0;
		}
	})

	command = {
		spouts : spouts,
		order : {
			drinks : drinks,
			total : total,
			valid : valid,
			payment : 'pending',
		}
	}
	Session.set('command', command )

	$("#price").html('€ ' + total)



	messageUno[4] = 0;
	if (FlowRouter._current.path === "/payment") {messageUno[4] = 1;}
	messageUno[5] = 9;
	Meteor.call("sendToSerialPort",messageUno);


	return command;
}
