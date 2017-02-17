
/**
 * Created by DADITYA on 2/16/2017.
 */
$(document).ready(function () {
    var sunTopStart=150,sunTopEnd=0,sunLeftStart=-60,sunLeftEnd=-1750,moonTopStart=100,moonTopEnd=-70,moonLeftEnd=-1650,moonLeftStart=70;
    var adjustSunMoonTime=setInterval(adjustSunMoon(new Date().getHours()),50);

    function adjustSunMoon(hours) {
        if(hours>=6&&hours<=18) {
            $(".sun").css("visibility","visible");
            $(".moon").css("visibility","hidden");
            $(".star").css("visibility","hidden");
            $(".window").css("background","-webkit-linear-gradient(top,gray,silver)");
            $(".window img").css("visibility","hidden");
            moveSun(hours);
        }
        else {
            $(".moon").css("visibility","visible");
            $(".sun").css("visibility","hidden");
            $(".star").css("visibility","visible");
            $(".window").css("background","-webkit-linear-gradient(top,yellow,silver)");
            $(".window img").css("visibility","visible");
            $(".star").fadeOut();
            moveMoon(hours);
        }
        setBackgroundColor(hours);
    }

    function moveSun(hours){
        var currentSunTop=(sunTopStart+(((sunTopEnd-sunTopStart)/6)*(Math.abs((hours%12)-6)))),currentSunLeft=sunLeftStart+(((sunLeftEnd-sunLeftStart)/12)*(hours-6));
        $(".sun").css({"top":currentSunTop+"px","left":currentSunLeft+"px"});
    }

    function moveMoon(hours){
        $(".star").fadeIn(2000);
        if(hours>18&&hours<24)
            hours=hours%12;
        else
            hours=hours+12;
        var currentMoonTop=(moonTopStart+(((moonTopEnd-moonTopStart)/6)*(Math.abs((hours%12)-6)))),currentMoonLeft=moonLeftStart+(((moonLeftEnd-moonLeftStart)/12)*(hours-6));
        $(".moon").css({"top":currentMoonTop+"px","left":currentMoonLeft+"px"});
    }

    function setBackgroundColor(hours) {
        var linearGradientStr="-webkit-linear-gradient(top,firstcolor,secondcolor)";
        switch(hours){
            case 1:linearGradientStr=linearGradientStr.replace("firstcolor","rgb(51, 20, 89)");linearGradientStr=linearGradientStr.replace("secondcolor","rgb(57, 89, 27)");
                break;
            case 2:linearGradientStr=linearGradientStr.replace("firstcolor","#696741");linearGradientStr=linearGradientStr.replace("secondcolor","#59264C");
                break;
            case 3:linearGradientStr=linearGradientStr.replace("firstcolor","#724263");linearGradientStr=linearGradientStr.replace("secondcolor","#59502D");
                break;
            case 4:linearGradientStr=linearGradientStr.replace("firstcolor","#633B24");linearGradientStr=linearGradientStr.replace("secondcolor","#594C04");
                break;
            case 5:linearGradientStr=linearGradientStr.replace("firstcolor","#63594F");linearGradientStr=linearGradientStr.replace("secondcolor","#0D5459");
                break;
            case 6:linearGradientStr=linearGradientStr.replace("firstcolor","#25635E");linearGradientStr=linearGradientStr.replace("secondcolor","#594511");
                break;
            case 7:linearGradientStr=linearGradientStr.replace("firstcolor","#726A2E");linearGradientStr=linearGradientStr.replace("secondcolor","#025959");
                break;
            case 8:linearGradientStr=linearGradientStr.replace("firstcolor","#8C6402");linearGradientStr=linearGradientStr.replace("secondcolor","#9B8D06");
                break;
            case 9:linearGradientStr=linearGradientStr.replace("firstcolor","#AC700A");linearGradientStr=linearGradientStr.replace("secondcolor","#AA9300");
                break;
            case 10:linearGradientStr=linearGradientStr.replace("firstcolor","#BFBD0D");linearGradientStr=linearGradientStr.replace("secondcolor","#AB4907");
                break;
            case 11:linearGradientStr=linearGradientStr.replace("firstcolor","#E8DB0F");linearGradientStr=linearGradientStr.replace("secondcolor","#E8A80C");
                break;
            case 12:linearGradientStr=linearGradientStr.replace("firstcolor","#E8830C");linearGradientStr=linearGradientStr.replace("secondcolor","#E8D0A2");
                break;
            case 13:linearGradientStr=linearGradientStr.replace("firstcolor","#E83E13");linearGradientStr=linearGradientStr.replace("secondcolor","#F5F780");
                break;
            case 14:linearGradientStr=linearGradientStr.replace("firstcolor","#E8640B");linearGradientStr=linearGradientStr.replace("secondcolor","#E89B1A");
                break;
            case 15:linearGradientStr=linearGradientStr.replace("firstcolor","#E4E80E");linearGradientStr=linearGradientStr.replace("secondcolor","#E88E40");
                break;
            case 16:linearGradientStr=linearGradientStr.replace("firstcolor","#E8876B");linearGradientStr=linearGradientStr.replace("secondcolor","#E86259");
                break;
            case 17:linearGradientStr=linearGradientStr.replace("firstcolor","#E89038");linearGradientStr=linearGradientStr.replace("secondcolor","#CAE8BF");
                break;
            case 18:linearGradientStr=linearGradientStr.replace("firstcolor","#A0E8CD");linearGradientStr=linearGradientStr.replace("secondcolor","#E8E535");
                break;
            case 19:linearGradientStr=linearGradientStr.replace("firstcolor","#ACB5E8");linearGradientStr=linearGradientStr.replace("secondcolor","#9C947E");
                break;
            case 20:linearGradientStr=linearGradientStr.replace("firstcolor","#184F54");linearGradientStr=linearGradientStr.replace("secondcolor","#765F63");
                break;
            case 21:linearGradientStr=linearGradientStr.replace("firstcolor","#502D23");linearGradientStr=linearGradientStr.replace("secondcolor","#261255");
                break;
            case 22:linearGradientStr=linearGradientStr.replace("firstcolor","#47213F");linearGradientStr=linearGradientStr.replace("secondcolor","#4B2315");
                break;
            case 23:linearGradientStr=linearGradientStr.replace("firstcolor","#291B06");linearGradientStr=linearGradientStr.replace("secondcolor","#0C0703");
                break;
            case 0:linearGradientStr=linearGradientStr.replace("firstcolor","#150E02");linearGradientStr=linearGradientStr.replace("secondcolor","#110E0F");
                break;
            default:alert("Invalid date");break;
        }
        $(".backgroundLight").css("background",linearGradientStr);
    }
    var count=0;
    $(".backgroundLight").mousemove(function (event) {
        var imgX=event.pageX;
        var imgY=event.pageY;
        $(".hill").css({top:(imgY+41000)*0.01,left:(imgX+20000)*0.01});
        $(".sky").css({top:(imgY+00)*0.05,left:(imgX+5000)*0.05});
        $(".sun").css("transform","rotate("+count%360+"deg)");
        count++;
    });
    $(".hill input").change(function changeDayAndNightManually() {
        clearInterval(adjustSunMoonTime);
        adjustSunMoon(parseInt($(".hill input").val()));
    });
});