/**
 * Created by ACER on 26-Jan-17.
 */
$(document).ready(function(){
        $( "#dialog-4" ).dialog({
              autoOpen: false,
               modal: true,
               buttons: {
                  OK: function() {$(this).dialog("close");}
               },
               width:600,
               height:700
            });
            $( "#opener-4" ).click(function() {
               $( "#dialog-4" ).dialog( "open" );
            });

        $(".intern-group").fadeIn(3000);
        $(".envelope").delay(3000).fadeIn(3000);
        $(".envelope").animate({
            left: '1000px',
            height: '+=10px',
            width: '+=10px'
        },3000);
        $(".team-lead").delay(8000).fadeIn(3000);
        $(".click-me").delay(12000).fadeIn(3000);
});
