Template.layout.helpers({
	state: function(){
		var state = FlowRouter.getParam("state");
		return state;
	}
});

Template.layout.events({

	'click .drink .fa': function (event, template) {
		console.log("test");
	},

});

Template.layout.onRendered(function(){
	refresh();
	dragAndDrop();
});
