Meteor.startup(function() {


	if (Catalog.find().count() === 0) {
		Catalog.insert({
			name: 'expresso',
			price: 0.5,
			preview: 'c-expresso'
		});

		Catalog.insert({
			name: 'cappuccino',
			price: 0.9,
			preview: 'c-cappuccino'
		});

		Catalog.insert({
			name: 'double',
			price: 0.9,
			preview: 'c-double'
		});

		Catalog.insert({
			name: 'latte',
			price: 0.9,
			preview: 'c-latte'
		});

		Catalog.insert({
			name: 'chocolate',
			price: 0.5,
			preview: 'c-chocolate'
		});

		Catalog.insert({
			name: 'tea',
			price: 0.5,
			preview: 'c-tea'
		});

	}
	if (State.find().count() === 0) {

		State.insert({
			name : 'command',
			command : {
				spouts : [{
					drink : 'none',
					state: 'ready',
				},
				{
					drink : 'none',
					state : 'ready',
				},
				{
					drink : 'none',
					state : 'ready',
				},
				{
					drink : 'none',
					state : 'ready',
				}],
				order:{
					drinks : [],
					total : 0,
					valid : false,
					payment : 'pending',
					waiting : false,
				},
				serving : '',
			}
		});
	}
	else{
		State.update({name: "command"}, { 
			name : 'command',
			command : {
				spouts : [{
					drink : 'none',
					state: 'ready',
				},
				{
					drink : 'none',
					state : 'ready',
				},
				{
					drink : 'none',
					state : 'ready',
				},
				{
					drink : 'none',
					state : 'ready',
				}],
				order:{
					drinks : [],
					total : 0,
					valid : false,
					payment : 'pending',
					waiting : false,
				},
				serving : '',
			}
		});

	}
})
