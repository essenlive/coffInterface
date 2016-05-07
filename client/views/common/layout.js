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
		"serving":""
	});
	Session.set('catalog',[
	{
		name: 'expresso',
		catch: 'For a quick break!',
		description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
		price: 0.5,
		preview: 'c-expresso'
	},
	{
		name: 'cappuccino',
		catch: 'For a quick break!',
		description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
		price: 0.5,
		preview: 'c-cappuccino'
	},
	{
		name: 'lungo',
		catch: 'For a quick break!',
		description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
		price: 0.5,
		preview: 'c-double'
	},
	{
		name: 'latte',
		catch: 'For a quick break!',
		description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
		price: 0.5,
		preview: 'c-mokaccino'
	},
	{
		name: 'chocolate',
		catch: 'For a quick break!',
		description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
		price: 0.5,
		preview: 'c-tchaitealatte'
	},
	{
		name: 'tea',
		catch: 'For a quick break!',
		description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
		price: 0.5,
		preview: 'c-tchaitealatte'
	}
	]);
refresh();

});
