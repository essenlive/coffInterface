Template.payment.helpers({
	status: function(){
		var total = numeral(Session.get('command').order.total).format('000.00');
		var status = Session.get('command').order.payment;
		switch(status){
			case "success":
			return {
				help: "Your payment has been successful",
				state: "success",
				content: '<i class="fa fa-check"></i>',
			}
			case "fail":
			return {
				help: "Your payment has been refused",
				state: "fail",
				content: '<i class="fa fa-exclamation"></i>',
			}
			case "pending":
			default:
			return {
				help: "Beep your card",
				state: "pending",
				content: '<i class="fa fa-wifi"></i><div>' + total + '€</div>',
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
		}, 5000);
	},
	'click #success': function (event, template) {
		var status = Session.get("command");
		status.order.payment = "success";
		Session.set("command", status);
		setTimeout(function(){
			var display = $("#spouts").children().empty();
			FlowRouter.go("/home");
			refresh();
		}, 5000);
	},
});
