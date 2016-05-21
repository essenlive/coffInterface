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
		var spoutOrder = [2,1,3,0].reverse();
		_.each( spoutOrder, function(element,index){
			if($(display[element]).hasClass('available')){
				pos = element;
			}
		})
		if (pos>-1) {

			$(display[pos]).prepend(choice);
			$(display[pos]).append('<i class="fa fa-times remove"></>');
		}
		else console.log("full");
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