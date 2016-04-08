Template.interface.helpers({
});

Template.interface.events({

    'click #bin': function (event, template) {
        $(".spout").empty();
        refresh();
    },
    'click #pay': function (event, template) {
        var receipt = JSON.stringify(refresh());
        alert(receipt);
    }
});

Template.layout.onRendered(function(){
    refresh();
    dragAndDrop();
});
