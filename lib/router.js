FlowRouter.route('/', {
	action: function(param) {
		refresh();
		FlowRouter.go("/home");
	}
});
FlowRouter.route('/:state', {
	action: function(param) {
		if ( !Session.get('command').order.valid ) FlowRouter.go("/home");
		refresh();
		BlazeLayout.render("layout");
	}
});
