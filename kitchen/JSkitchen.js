/**
 * Created by ACER on 26-Jan-17.
 */
$(document).ready(function () {
    $(".stove-button").click(function () {
        if($(".stove-button").css("border")=="3px solid rgb(0, 0, 0)")
        {
            $(".stove img").css("visibility", "visible");
            $(".stove-button").css("border","3px double rgb(0, 0, 0)");
        }
        else
        {
            $(".stove img").css("visibility", "hidden");
            $(".stove-button").css("border","3px solid rgb(0, 0, 0)");
        }
    });
    $("#knob1").click(function () {
        if($("#knob1").css("border")=="5px solid rgb(18, 43, 64)")
        {
            $("#cupboard1").css("transform", "rotateY(  60deg )");
            $("#knob1").css("border","5px double rgb(18, 43, 64)");
        }
        else
        {
            $("#cupboard1").css("transform", "rotateY(  0deg )");
            $("#knob1").css("border","5px solid rgb(18, 43, 64)");
        }
    });
    $("#knob2").click(function () {
        if($("#knob2").css("border")=="5px solid rgb(18, 43, 64)")
        {
            $("#cupboard2").css("transform", "rotateY(  60deg )");
            $("#knob2").css("border","5px double rgb(18, 43, 64)");
        }
        else
        {
            $("#cupboard2").css("transform", "rotateY(  0deg )");
            $("#knob2").css("border","5px solid rgb(18, 43, 64)");
        }
    });
    $("#knob3").click(function () {
        if($("#knob3").css("border")=="5px solid rgb(18, 43, 64)")
        {
            $("#cupboard3").css("transform", "rotateX(  60deg )");
            $("#knob3").css("border","5px double rgb(18, 43, 64)");
        }
        else
        {
            $("#cupboard3").css("transform", "rotateX(  0deg )");
            $("#knob3").css("border","5px solid rgb(18, 43, 64)");
        }
    });

});