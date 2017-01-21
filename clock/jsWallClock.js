/**
 * Created by ACER on 21-Jan-17.
 */

var pendulumCount=-30;
var oscTO=setInterval(oscillation,50);
var oscFront=false;
var timeTO=setInterval(adjustTime,1);
function oscillation(){
    if(pendulumCount==-30)
        oscFront=true;
    if(pendulumCount==30)
        oscFront=false;
    if(oscFront)
        pendulumCount++;
    else
        pendulumCount--;
    $('.pendulum').css("transform","rotate("+pendulumCount+"deg)");
}

function adjustTime(){
    var date = new Date;
    $('.secondsHand').css("transform","rotate("+date.getSeconds()*6+"deg)");
    $('.minutesHand').css("transform","rotate("+date.getMinutes()*6+"deg)");
    $('.hoursHand').css("transform","rotate("+30 * ((date.getHours() % 12) + date.getMinutes() / 60)+"deg)");
}