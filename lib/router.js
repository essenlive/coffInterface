FlowRouter.route('/', {
    action: function(params) {
        FlowRouter.go("/expresso");
    }
});
FlowRouter.route('/:selec', {
    action: function(params) {
        BlazeLayout.render("layout", {content: "interface"});
    }
});
