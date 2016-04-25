//
// Refresh receipt

refresh = function(){
    var spouts = ["spout1","spout2","spout3","spout4"]
    var receipt = [];
    var command = [];
    var total = 0;
    $.each(spouts, function(index, value){
        item = "#" + value;
        receipt[index] = {
            drink : $(item).data("item"),
            price : $(item).data("price"),
        };
        command[index] = $(item).data("item");

    })
    $.each(receipt, function(key, value){
        total += value.price;
    })
    $("#price").html('$' + total)
    return command;
}
