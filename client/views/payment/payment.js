Template.payment.helpers({
	status: function(){
		var total = numeral(Session.get('command').order.total).format('000.00');
		switch(status="pending"){
			case "success":
			return {
				state: "success",
				content: '<i class="fa fa-check"></i>',
			}
			case "fail":
			return {
				state: "fail",
				content: '<i class="fa fa-exclamation"></i>',
			}
			case "pending":
			default:
			return {
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