Template.interface.helpers({
});

Template.interface.events({

    'drop': function (event, template) {
        console.log("test");
    }
});

Template.interface.onRendered(function(){
    dragula(
        [
            document.querySelector('#catalog'),
            document.querySelector('#spout1'),
            document.querySelector('#spout2'),
            document.querySelector('#spout3'),
            document.querySelector('#spout4'),
            document.querySelector('#spout5'),
            document.querySelector('#spout6'),
        ],
        {
            copy: function (el, source) {
                // DEBUG: only copy when parent element has copy class
                // return el.parent().hasClass("copy");
                return true;
            }
        }
    );
});
