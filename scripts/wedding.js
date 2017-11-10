// wedding.js
// scripts for wedding page

require("../scss/wedding.scss");


$(document).ready(function(){
    // Update the countdown clock every second
    setInterval(countdown, 1000);
});

function countdown () { 
    
    var mil_to_days = 1000 * 60 * 60 * 24;
    var mil_to_hours = 1000 * 60 * 60;
    var mil_to_minutes = 1000 * 60;
    var mil_to_seconds = 1000;
    var now = new Date();
    var wedding_date = new Date("September 23, 2017 00:00:00");
    var dif = now - wedding_date;
    var days = Math.floor(dif / mil_to_days);
    var hours = dif - (days * mil_to_days);
    hours = Math.floor( hours / mil_to_hours);
    var minutes = dif - ( (days * mil_to_days) + (hours * mil_to_hours) );
    minutes = Math.floor ( minutes / mil_to_minutes);
    var seconds = dif - ( (days * mil_to_days) + (hours * mil_to_hours) + (minutes * mil_to_minutes) )
    seconds = Math.floor (seconds / mil_to_seconds);
    console.log(`Hours: ${hours} Days: ${days} Minutes: ${minutes} Seconds: ${seconds}`);

    $("#days").html(days);
    $("#hours").html(hours);
    $("#minutes").html(minutes);
    $("#seconds").html(seconds);

}