Template.catalog.helpers({
	catalog: function() {
		var catalog = Session.get('catalog');
		console.log(catalog);
		_.each(catalog, function(element, index, value){
			element.pricenum = numeral(element.price).format('000.00');
		});
		return catalog;
	},
});