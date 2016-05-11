Template.actions.helpers({
	valid: function(){
		var valid = State.findOne({name: 'command'});
		return valid && valid.command.order.valid;
	},
	total: function(){
		var total = State.findOne({name: 'command'});
		return total && numeral(total.command.order.total).format('000.00');
	}
})