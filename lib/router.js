FlowRouter.route('/', {
	action: function(param) {
		FlowRouter.go("/home");
	}
});
FlowRouter.route('/:state', {
	action: function(param) {
		BlazeLayout.render("layout");
	}
});
