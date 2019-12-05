var h, m, s;
var totalMs;
var countdown;
var initialMillis;

//actual countdown function
function timer(){
    var totalHours = Math.trunc(totalMs / 3600000);
    var totalMinutes = Math.trunc((totalMs / 60000) % 60);
    var totalSeconds = Math.trunc((totalMs / 1000) % 60);
    var msLeft = Math.trunc(totalMs % 1000);
    document.title = totalHours + "h " + totalMinutes + "m " + totalSeconds + "s";

    document.getElementById("h").innerHTML = totalHours;
    document.getElementById("m").innerHTML = totalMinutes;
    document.getElementById("s").innerHTML = totalSeconds;
    document.getElementById("ms").innerHTML = msLeft;
    if(totalMs <= 0){
        stop();
        return;
    }else{
        var current = Date.now();
        totalMs -= current - initialMillis; //subtract total elapsed time between function calls, ensures a consistent countdown
        initialMillis = current;
    }
}

function start(){
    stop();
    initialMillis = Date.now();
    countdown = setInterval(timer, 1);
}

function stop(){
    clearTimeout(countdown);
}

function reset(){
    stop();

    //reset totalMs
    h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
    m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
    s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
    totalMs = (h*3600000) + (m*60000) + (s*1000);
    
    //reset text
    var totalHours = Math.trunc(totalMs / 3600000);
    var totalMinutes = Math.trunc((totalMs / 60000) % 60);
    var totalSeconds = Math.trunc((totalMs / 1000) % 60);
    var msLeft = Math.trunc(totalMs % 1000);
    document.getElementById("h").innerHTML = totalHours;
    document.getElementById("m").innerHTML = totalMinutes;
    document.getElementById("s").innerHTML = totalSeconds;
    document.getElementById("ms").innerHTML = msLeft;

    document.getElementById("title").innerHTML = "Timer!";
}

$(document).ready(function(){
    $("#h-input").change(function(){
        h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
        m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
        s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
        totalMs = (h*3600000) + (m*60000) + (s*1000);
    })
    $("#m-input").change(function(){
        h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
        m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
        s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
        totalMs = (h*3600000) + (m*60000) + (s*1000);
    })
    $("#s-input").change(function(){
        h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
        m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
        s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
        totalMs = (h*3600000) + (m*60000) + (s*1000);
    })

})