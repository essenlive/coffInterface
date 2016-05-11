	Template.payment.helpers({
		status: function(){
			var total = numeral(State.findOne({name: 'command'}).command.order.total).format('000.00');
			var status = State.findOne({name: 'command'}).command.order.payment;
			var serving = State.findOne({name: 'command'}).command.serving;
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
			return numeral(State.findOne({name: 'command'}).command.order.total).format('000.00');
		},
		drinks: function(){
			return State.findOne({name: 'command'}).command.order.drinks;
		},
	})