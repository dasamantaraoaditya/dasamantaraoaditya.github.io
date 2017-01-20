/**
 * Created by DADITYA on 1/20/2017.
 */

var cost=1;
$(document).keypress(function(e) {
    //alert(e.keyCode);
    if(e.keyCode==53)
        {
            onOff();
        }

    if($("#onOff").text()=='Off') {
        if (e.keyCode == 54)//forward
        {
            moveForward();
            wheelsEffect();
        }
        if (e.keyCode == 52)//back
        {
            moveBackward();
            wheelsEffect();
        }
        if (e.keyCode == 50)//down
        {
            moveDown();
        }
        if (e.keyCode == 56)//up
        {
            moveUp();
        }
        if (e.keyCode == 49)//cressDown
        {
            pillarDown();
        }
        if (e.keyCode == 57)//crossUp
        {
            pillarUp();
        }
    }
});
var wheelCount=0;
function onOff(){
    if($("#onOff").text()=='On')
    {
        $("#onOff").text("Off");
        $("#onOff").css("background-color", "red");
        $(".smoke").css("visibility","visible");
    }
    else
    {
        $("#onOff").text("On");
        $("#onOff").css("background-color", "green");
        $(".smoke").css("visibility","hidden");
    }
}
function wheelsEffect() {
    if(wheelCount%2)
        $(".wheels").css("border","solid");
    else
        $(".wheels").css("border","double black 5px");
    wheelCount++;
}
function moveForward() {
    var craneLeft=parseInt($('.crane').css('left').split('p')[0]);
    craneLeft+=2;
    if(craneLeft<500)
    $('.crane').css({left:craneLeft});
}

function moveBackward() {
    var craneLeft=parseInt($('.crane').css('left').split('p')[0]);
    craneLeft-=2;
    if(craneLeft>0)
    $('.crane').css({left:craneLeft});
}

function moveUp(){
    var stringHeight=parseInt($('.strings').css('height').split('p')[0]);
    stringHeight-=2;
    if(stringHeight>50)
    $('.strings').css({height:stringHeight});
}

function moveDown(){
    var stringHeight=parseInt($('.strings').css('height').split('p')[0]);
    stringHeight+=2;
    if(stringHeight<400)
    $('.strings').css({height:stringHeight});
}

function pillarUp(){//height++ top-- left++
    var pillarHeight=parseInt($('.innerPillar').css('height').split('p')[0]);
    var pillarTop=parseInt($('.innerPillar').css('top').split('p')[0]);
    var pillarLeft=parseInt($('.innerPillar').css('left').split('p')[0]);
    var carriageTop=parseInt($('.carriage').css('top').split('p')[0]);
    var carriageLeft=parseInt($('.carriage').css('left').split('p')[0]);
    pillarHeight+=1;
    pillarLeft+=1;
    pillarTop-=1;
    carriageTop-=2.7;
    cost++;
    if(cost%250==0)
        carriageTop-=2.0;
    if(cost%40==0)
        carriageLeft+=2.7;
    carriageLeft+=2.7;
    if(pillarLeft<935) {
        $('.innerPillar').css({height: pillarHeight, left: pillarLeft, top: pillarTop});
        $('.carriage').css({left:carriageLeft,top:carriageTop})
    }
}

function pillarDown() {
var pillarHeight=parseInt($('.innerPillar').css('height').split('p')[0]);
    var pillarTop=parseInt($('.innerPillar').css('top').split('p')[0]);
    var pillarLeft=parseInt($('.innerPillar').css('left').split('p')[0]);
    var carriageTop=parseInt($('.carriage').css('top').split('p')[0]);
    var carriageLeft=parseInt($('.carriage').css('left').split('p')[0]);
    pillarHeight-=1;
    pillarLeft-=1;
    pillarTop+=1;
    carriageTop+=2;
    cost++;
    if(cost%250==0)
        carriageTop-=2;
    if(cost%40==0)
        carriageLeft-=2.5;
    carriageLeft-=2;
    if(pillarLeft>734) {
        $('.innerPillar').css({height: pillarHeight, left: pillarLeft, top: pillarTop});
        $('.carriage').css({left:carriageLeft,top:carriageTop})
    }
}
