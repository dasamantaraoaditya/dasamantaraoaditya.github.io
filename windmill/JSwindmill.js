/**
 * Created by ACER on 20-Mar-17.
 */

var count=0,countTime,cutOff=1;

$(document).ready(
    function () {
        countTime=setInterval(rotateWindmill,50);
        $('.background').mouseover(function () {
            rotateWindmill();rotateWindmill();
    });
        $("#normal").change(
            function(){
                $('.background').css('background','-webkit-linear-gradient(left,#1abc9c,#2C3E50)');
                $('.sky').html('<img class="cloud" style="width:150px;top:100px;left:300px" src="cloud1.png">' +
                    '<img class="cloud" style="width:170px;top:150px;left:600px" src="cloud1.png">');
                cutOff=1;
            });
        $("#rainy").change(
            function(){
                $('.background').css('background','-webkit-linear-gradient(top,#82B8BC,#2B204A)');
                $('.sky').html('<img class="cloud" style="width:150px;top:100px;left:300px" src="rainy_cloud.gif">' +
                    '<img class="cloud" style="width:130px;top:150px;left:600px" src="rainy_cloud.gif">');
                cutOff=3;
            });
        $("#windy").change(
            function(){
                $('.background').css('background','-webkit-linear-gradient(left,#E3E3CB,#FF9232)');
                $('.sky').html('<img class="cloud" style="width:150px;top:100px;left:300px" src="cloud1.png">');
                cutOff=5;
            });
        $("#summer").change(
            function(){
                $('.background').css('background','-webkit-linear-gradient(top,#BC5A2F,#BC8D2D)');
                $('.sky').html('<img class="cloud" style="width:150px;top:100px;left:300px" src="Sun.png">');
                cutOff=1;
            });
        $("#winter").change(
            function(){
                $('.background').css('background','-webkit-linear-gradient(left,#AEA3AE,#A1BCBB)');
                $('.sky').html('<img class="cloud" style="width:100px;top:250px;left:730px" src="snow.gif">'+
                '<img class="cloud" style="width:170px;top:150px;left:600px" src="cloud1.png">');
                cutOff=2;
            });
        $("#spring").change(
            function(){
                $('.background').css('background','-webkit-linear-gradient(top,#80BCAD,#FAD7FB)');
                $('.sky').html('<img class="cloud" style="width:150px;top:100px;left:300px" src="Sun.png">'+
                '<img class="cloud" style="width:170px;top:150px;left:600px" src="cloud1.png">');
                cutOff=4;
            });
    });

function rotateWindmill(){
    $('.wings').css("transform","rotate("+count+"deg)");
    count+=cutOff;
}

