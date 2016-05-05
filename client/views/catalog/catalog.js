Template.catalog.helpers({
	catalog: function() {
		var catalog = Catalog.find().fetch();
		_.each(catalog, function(element, index, value){
			element.pricenum = numeral(element.price).format('000.00');
		});
		return catalog;
	},
});