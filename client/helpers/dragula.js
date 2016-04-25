dragAndDrop = function(){
    dragula(
        [
        document.querySelector('#drinks'),
        document.querySelector('#spout1'),
        document.querySelector('#spout2'),
        document.querySelector('#spout3'),
        document.querySelector('#spout4'),
        document.querySelector('#spout5'),
        document.querySelector('#spout6'),
        ],
        {
            copy: function (el, source) {
                return $(source).hasClass('copy');
            },
            accepts: function (el, target) {
                return !$(target).hasClass('copy');
            }
        }
        ).on('dragend', function (el) {
            refresh();
        }).on('drop', function (el, target, source, sibling) {
            if($(target).hasClass('spout')){
                $(target).empty();
                $(target).prepend($(el));
            }
        })
    }
