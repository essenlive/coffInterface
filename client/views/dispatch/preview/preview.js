Template.preview.helpers({
    drink: function(){
        var selec = FlowRouter.getParam("selec");
        var drink = Catalog.findOne({name:selec});
        return drink;
    }
});

Template.preview.events({
});
