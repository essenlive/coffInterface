// Refresh receipt
Meteor.startup(function(){
	Session.set('command', {
		"spouts":[null,null,null,null],
		"order":{
			drinks: [],
			total: 0,
			valid: false,
			payment: "pending",
		},
		serving:""
	});
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


	var serving = $("#spouts").clone();
	serving.find(".remove").remove();
	serving = serving.html();

	var command = {
		spouts : spouts,
		order : {
			drinks : drinks,
			total : total,
			valid : valid,
			payment : 'pending',
		},
		serving : serving,
	}
	Session.set('command', command )

	$("#price").html('€ ' + total)

	messageUno[4] = 0;
	if (FlowRouter._current.path === "/payment") {messageUno[4] = 1;}
	messageUno[5] = 9;
	console.log(messageUno);
	Meteor.call("sendToSerialPort",messageUno);




	return command;
}
