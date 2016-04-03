// Fake values to fill the database
Meteor.startup(function() {
    if (Catalog.find().count() === 0) {
        Catalog.insert({
            name: 'expresso',
            catch: 'For a quick break!',
            description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
            price: '1',
            preview: 'c-expresso'
        });

        Catalog.insert({
            name: 'Cappuccino',
            catch: 'For a quick break!',
            description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
            price: '1',
            preview: 'c-cappuccino'
        });

        Catalog.insert({
            name: 'Double',
            catch: 'For a quick break!',
            description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
            price: '1',
            preview: 'c-double'
        });

        Catalog.insert({
            name: 'Mokaccino',
            catch: 'For a quick break!',
            description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
            price: '1',
            preview: 'c-mokaccino'
        });

        Catalog.insert({
            name: 'Tchai Tea Latte',
            catch: 'For a quick break!',
            description: 'Quia recusandae eveniet et vitae ea. Amet illum quasi est. Aut voluptate qui nisi ut. Et earum unde necessitatibus laborum debitis. Dolores incidunt recusandae ut voluptatibus saepe culpa.</n> Corrupti odio eaque reprehenderit asperiores quia harum eligendi numquam. Neque similique natus inventore illo. Quaerat ab numquam ut et. Incidunt enim ut nostrum. </n> Iusto aliquam quasi voluptates iusto sint. Voluptatum sed veritatis dolor minima magnam est minus. Beatae a totam nulla quae temporibus. Sequi et omnis non perferendis. Eveniet eum voluptate consectetur omnis omnis quo quis nihil. Sed nemo vel quo tempora cum est similique ut. ',
            price: '1',
            preview: 'c-tchaitealatte'
        });

    }
})
