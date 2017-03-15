/**
 * Created by AdityaDasamantharao on 13-Mar-17.
 */
var allQuotes=[];
var allColors=[];
$(document).ready(function () {

    jQuery.get('quotes.txt', function (data) {
        allQuotes=data.split("\n");
        allColors=["#FF0000","#FF6600","#336699","#666666","#003366","#000000","#FF9900","#8C001A","#663300","#5F021F","#CF5300","#FFC200","#B378D3","#129793","#3A5F0B","#FF3333","#EF597B","#841F27"];
    });
});
setTimeout(nextQuote,500);
function nextQuote() {
        var index=  Math.floor(Math.random() * (allQuotes.length/2));
        $("#quote").html('<i class="fa fa-lg fa-quote-left" aria-hidden="true"></i> '+allQuotes[index].split('"""')[0]);
        $("#quote-writer").html("- "+allQuotes[index].split('"""')[1]);
        changeColor();
    }
function changeColor() {
    var color=allColors[Math.floor(Math.random() * (allColors.length))];
    $(".all-color").css("background-color",color);
    $(".box").css("color",color);
    $(".twitter").css({"background-color":color,"border-color":color});
    $("#next-quote").css({"background-color":color,"border-color":color});
}