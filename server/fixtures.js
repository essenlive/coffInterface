Meteor.startup(function() {


	if (Catalog.find().count() === 0) {
		Catalog.insert({
			name: 'expresso',
			catch: 'For a quick break!',
			description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
			price: 0.5,
			preview: 'c-expresso'
		});

		Catalog.insert({
			name: 'cappuccino',
			catch: 'For a quick break!',
			description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
			price: 0.5,
			preview: 'c-cappuccino'
		});

		Catalog.insert({
			name: 'lungo',
			catch: 'For a quick break!',
			description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
			price: 0.5,
			preview: 'c-double'
		});

		Catalog.insert({
			name: 'latte',
			catch: 'For a quick break!',
			description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
			price: 0.5,
			preview: 'c-mokaccino'
		});

		Catalog.insert({
			name: 'chocolate',
			catch: 'For a quick break!',
			description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
			price: 0.5,
			preview: 'c-tchaitealatte'
		});

		Catalog.insert({
			name: 'tea',
			catch: 'For a quick break!',
			description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
			price: 0.5,
			preview: 'c-tchaitealatte'
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
