/**
 * Created by ACER on 11-Feb-17.
 */
var time;
$(document).ready(function () {
    $("#coffee").click(function(){
        if($("#coffee").css("border")=="3px solid rgb(0, 0, 0)") {
            $(".water-inside").css("height", "0px");
            $(".water-inside").css("top", "70px");
            $(".flow-water").css("display","inline");
            $("#coffee").css("border", "3px double rgb(0, 0, 0)");
        }
        else {
            $("#coffee").css("border", "3px solid rgb(0, 0, 0)")
        }
       fillCoffee();
    });
    $("#milk").click(function(){
        if($("#milk").css("border")=="3px solid rgb(0, 0, 0)") {
            $(".water-inside").css("height", "0px");
            $(".water-inside").css("top", "70px");
            $(".flow-water").css("display","inline");
            $("#milk").css("border", "3px double rgb(0, 0, 0)");
        }
        else {
            $("#milk").css("border", "3px solid rgb(0, 0, 0)")
        }
        fillMilk();
    });
    $("#greentea").click(function(){
        if($("#greentea").css("border")=="3px solid rgb(0, 0, 0)") {
            $(".water-inside").css("height", "0px");
            $(".water-inside").css("top", "70px");
            $(".flow-water").css("display","inline");
            $("#greentea").css("border", "3px double rgb(0, 0, 0)");
        }
        else {
            $("#greentea").css("border", "3px solid rgb(0, 0, 0)")
        }
        fillGreenTea();
    });
    $("#water").click(function(){
        if($("#water").css("border")=="3px solid rgb(0, 0, 0)") {
            $(".water-inside").css("height", "0px");
            $(".water-inside").css("top", "70px");
            $(".flow-water").css("display","inline");
            $("#water").css("border", "3px double rgb(0, 0, 0)");
        }
        else {
            $("#water").css("border", "3px solid rgb(0, 0, 0)")
        }
        fillWater();
    });
});

    function fillCoffee() {
        $(".flow-water").css("background", "-webkit-linear-gradient(bottom,brown,lightblue)");
        $(".water-inside").css("background", "-webkit-linear-gradient(bottom,brown,lightblue)");
        $(".flow-water").animate({"height":"30px"});
        time=setInterval(fillGlass, 100);
     }
    function fillMilk() {
        $(".flow-water").css("background", "-webkit-linear-gradient(bottom,whitesmoke,lightblue)");
        $(".water-inside").css("background", "-webkit-linear-gradient(bottom,whitesmoke,lightblue)");
        $(".flow-water").animate({"height":"30px"});
        time=setInterval(fillGlass, 100);
    }
    function fillGreenTea() {
        $(".flow-water").css("background", "-webkit-linear-gradient(bottom,lightgreen,lightblue)");
        $(".water-inside").css("background", "-webkit-linear-gradient(bottom,lightgreen,lightblue)");
         $(".flow-water").animate({"height":"30px"});
        time=setInterval(fillGlass, 100);
    }
    function fillWater() {
        $(".flow-water").css("background", "-webkit-linear-gradient(bottom,lightblue,lightblue)");
        $(".water-inside").css("background", "-webkit-linear-gradient(bottom,lightblue,lightblue)");
        $(".flow-water").animate({"height":"30px"});
        time=setInterval(fillGlass, 100);
    }

function fillGlass(){
    var size=parseInt($(".water-inside").css("height").split("p")[0]);
    size++;
    var top=parseInt($(".water-inside").css("top").split("p")[0]);
    top--;
    if(size>60) {
        clearInterval(time);
        $(".flow-water").css("display","none");
    }
    else {
        $(".water-inside").css("height", size + "px");
        $(".water-inside").css("top", top + "px");
    }
}