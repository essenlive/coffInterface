Template.actions.helpers({
	order: function(){
		return Session.get('command').order;
	},
	total: function(){
		return numeral(Session.get('command').order.total).format('000.00');
	}
})