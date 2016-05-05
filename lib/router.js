FlowRouter.route('/', {
	action: function(param) {
		refresh();
		FlowRouter.go("/home");
	}
});
FlowRouter.route('/:state', {
	action: function(param) {
		refresh();
		BlazeLayout.render("layout");
	}
});
