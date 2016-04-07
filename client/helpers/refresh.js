//
// Refresh receipt

refresh = function(){
    var spouts = ["spout1","spout2","spout3","spout4","spout5","spout6"]
    var receipt = [];
    var command = [];
    var total = 0;
    $.each(spouts, function(index, value){
        item = "#" + value + " .card";
        receipt[index] = {
            drink : $(item).data("item"),
            price : $(item).data("price"),
        };
        command[index] = $(item).data("item");

    })
    $("#item-list").empty();
    $.each(receipt, function(key, value){
        if( value.drink ){
            $("#item-list").append('<div class="item"><div class="right floated content">$' + value.price + '</div><div class="content"><p>' + value.drink + '</p></div></div>')
            total += value.price;
        }
    })
    if ( total === 0) {
        $("#item-list").append('<div class="item"><div class="content"><p> add a drink !</p></div></div>')
    }
    $("#item-list").append('<div id="sum" class="item"><div class="ui divider"></div><div class="right floated content">$' + total + '</div><div class="content"><p>Total</p></div><div class="ui divider"></div></div>')
    return command;
}
