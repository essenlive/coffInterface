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
			if($(element).is(':empty')){
				pos = index;
			}
		})
		if (pos>-1) {

			$(display[pos]).prepend(choice);
			$(display[pos]).append('<i class="fa fa-times remove"></>');
			if(!$(display[pos]).hasClass('ready')){
				$(display[pos]).addClass('ready');

			}
		}
		refresh();
	},
	'click .remove':function(event, template) {
		object = event.currentTarget;
		$( object ).parent().removeClass("ready") ; 
		$( object ).parent().empty() ;
		refresh();
	}

});


Template.layout.onRendered(function(){
	if (Meteor.Device.isDesktop()) {
		$("html").addClass("test");
	}
	setTimeout(function(){
		refresh();
		dragAndDrop();
	}, 1000);
});
Template.layout.onCreated(function(){
	Session.set('command', {
		"spouts":[null,null,null,null],
		"order":{
			drinks: [],
			total: 0,
			valid: false,
			payment: "pending",
		},
		serving:""
	});
	refresh();

});
