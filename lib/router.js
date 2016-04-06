FlowRouter.route('/', {
    action: function(params) {
        BlazeLayout.render("layout", {content: "interface"});
    }
});
FlowRouter.route('/:selec', {
    action: function(params) {
        BlazeLayout.render("layout", {content: "interface"});
    }
});
