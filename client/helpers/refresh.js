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
	var messageUno = ["a","a","a","a",0,"z"];
	var i = 0;
	_.each( display, function(element, index, value){
		spouts[index] = $(element).find('.drink').data("item");
		console.log($(element).find('.drink').data("item"));
		if ( !$(element).find('.drink').data("item") ){
			messageUno[index] = "a";
		}
		else {
			switch($(element).find('.drink').data("item")){
				case "expresso":
				messageUno[index] = "b";
				break;
				case "lungo":
				messageUno[index] = "c";
				break;
				default:
				messageUno[index] = "d";
			};
		};
		

		if(_.isNumber($(element).find('.drink').data("price"))){
			drinks[i] = {
				drink : $(element).find('.drink').data("item"),
				price : Number($(element).find('.drink').data("price")),
			};
			i++;
			total += Number($(element).find('.drink').data("price"));
			valid = true;
		}
		else{
			$(element).removeClass('ready');
			$(element).empty();
		}
	})

	messageUno[4] = 0;
	messageUno[5] = "z";
	console.log(messageUno);
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
	$(".remove").on("click",function() { 
		$( this ).parent().removeClass("ready") ; 
		$( this ).parent().empty() ;
		refresh();
	})
	$("#price").html('€ ' + total)

	Meteor.call("sendToSerialPort",messageUno);


	return command;
}
