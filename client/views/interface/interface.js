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
            document.querySelector('#bin'),
        ],
        {
            copy: function (el, source) {
                console.log( source.classList.contains('copy') );
                return source.classList.contains('copy');
            },
            accepts: function (el, target) {
                var catAcceptance = !target.classList.contains('copy');
                // var spoutAcceptance = target.is(':empty');
                // console.log(spoutAcceptance);
                return catAcceptance;
            }
        }
    );
});
