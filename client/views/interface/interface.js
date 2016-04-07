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

Template.interface.onRendered(function(){
    refresh();
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
                return $(source).hasClass('copy');
            },
            accepts: function (el, target) {
                return !$(target).hasClass('copy');
            }
        }
    ).on('over', function (el, container) {
        if($(container).hasClass('bin')){
            container.className += ' hover';
        }
    }).on('out', function (el, container) {
        if($(container).hasClass('bin')){
            container.className = container.className.replace('hover', '');
        }
    }).on('dragend', function (el) {
        refresh();
    }).on('drop', function (el, target, source, sibling) {
        if($(target).hasClass('spout')){
            $(target).empty();
            $(target).prepend($(el));
        }
    })
});
