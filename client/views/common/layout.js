Template.layout.helpers({
	state: function(){
		var state = FlowRouter.getParam("state");
		return state;
	}
});

Template.layout.events({

	'click #catalog .drink': function (event, template) {
		var display = $("#spouts").children();
		var choice = $(event.currentTarget).clone();
		var pos = -1;
		_.each( display, function(element,index){
			if($(element).hasClass('available')){
				pos = index;
			}
		})
		if (pos>-1) {

			$(display[pos]).prepend(choice);
			$(display[pos]).append('<i class="fa fa-times remove"></>');
		}
		refresh();
	},
	'click .remove':function(event, template) {
		object = event.currentTarget;
		$( object ).parent().empty() ;
		refresh();
	}

});


Template.layout.onRendered(function(){
	setTimeout(function(){
		refresh();
		dragAndDrop();
	}, 1000);
});