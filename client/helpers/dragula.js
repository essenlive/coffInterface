dragAndDrop = function(){
    dragula(
        [
        document.querySelector('#drinks'),
        document.querySelector('#spout1'),
        document.querySelector('#spout2'),
        document.querySelector('#spout3'),
        document.querySelector('#spout4'),
        ],
        {
            copy: function (el, source) {
                return $(source).hasClass('copy');
            },
            accepts: function (el, target) {
                return $(target).hasClass('available') || $(target).hasClass('ready');
            }
        }
        ).on('over', function (el, container) {
            if($(container).hasClass('spout')){
                $(container).addClass('hover');
            }
        }).on('out', function (el, container) {
            if($(container).hasClass('spout')){
                $(container).removeClass('hover');
            }
        }).on('dragend', function (el) {
            refresh();
        }).on('drop', function (el, target, source, sibling) {
            if($(target).hasClass('spout')){
                $(target).empty();
                $(target).prepend($(el));
                $(target).append('<i class="fa fa-times remove"></>');
            }
        })
    }
