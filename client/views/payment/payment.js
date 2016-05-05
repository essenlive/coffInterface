Template.payment.helpers({
	status: function(){
		var total = numeral(Session.get('command').order.total).format('000.00');
		var status = Session.get('command').order.payment;
		var serving = Session.get('command').serving;
		switch(status){
			case "success":
			return {
				help: "Your payment has been successful",
				state: "success",
				content: '<div id="serving">' + serving + '</div>',
			}
			case "fail":
			return {
				help: "Your payment has been refused",
				state: "fail",
				content: '<div id="payment-total"><i class="fa fa-exclamation"></i></div>',
			}
			case "pending":
			default:
			return {
				help: "Beep your card",
				state: "pending",
				content: '<div id="payment-total"><i class="fa fa-wifi"></i><div>' + total + '€</div></div>',
			}
		}
	},
	total: function(){
		return numeral(Session.get('command').order.total).format('000.00');
	},
	drinks: function(){
		return Session.get('command').order.drinks;
	},
})
Template.payment.events({

	'click #fail': function (event, template) {
		var status = Session.get("command");
		status.order.payment = "fail";
		Session.set("command", status);
		setTimeout(function(){
			var display = $("#spouts").children().empty();
			FlowRouter.go("/home");
			refresh();
		}, 2000);
	},
	'click #success': function (event, template) {
		var status = Session.get("command");
		status.order.payment = "success";
		Session.set("command", status);
	},
});
