var h = 0;
var m = 0;
var s = 0;
var totalSeconds = (h*3600) + (m*60) + s;
var started = false;
var countdown;

//the actual countdown
function timedCount(){
    var totalHours = Math.trunc(totalSeconds / 3600);
    var totalMinutes = Math.trunc((totalSeconds % 3600) / 60);
    var secondsLeft = Math.trunc(totalSeconds % 60);

    document.getElementById("h").innerHTML = totalHours;
    document.getElementById("m").innerHTML = totalMinutes;
    document.getElementById("s").innerHTML = secondsLeft;

    document.getElementById("title").innerHTML = totalHours + "h " + totalMinutes + "m " + secondsLeft + "s";

    if(totalSeconds == 0){
        stop();
    }else{
        totalSeconds--;
        countdown = setTimeout(timedCount, 1000);
    }
}

function start(){
    if(!started){
        started = true;
        timedCount();
    }
}

function stop(){
    clearTimeout(countdown);
    started = false;
}

function reset(){
    stop();

    //reset totalseconds
    h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
    m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
    s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
    totalSeconds = (h*3600) + (m*60) + s;
    
    //reset text
    var totalHours = Math.trunc(totalSeconds / 3600);
    var totalMinutes = Math.trunc((totalSeconds % 3600) / 60);
    var secondsLeft = Math.trunc(totalSeconds % 60);
    document.getElementById("h").innerHTML = totalHours;
    document.getElementById("m").innerHTML = totalMinutes;
    document.getElementById("s").innerHTML = secondsLeft;

    document.getElementById("title").innerHTML = "Timer!";
}

$(document).ready(function(){
    $("#h-input").change(function(){
        h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
        m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
        s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
        totalSeconds = (h*3600) + (m*60) + s;    
    })

    $("#m-input").change(function(){
        h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
        m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
        s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
        totalSeconds = (h*3600) + (m*60) + s;    
    })
    $("#s-input").change(function(){
        h = parseInt(document.getElementById("h-input").value.length == 0 ? 0 : document.getElementById("h-input").value);
        m = parseInt(document.getElementById("m-input").value.length == 0 ? 0 : document.getElementById("m-input").value);
        s = parseInt(document.getElementById("s-input").value.length == 0 ? 0 : document.getElementById("s-input").value);
        totalSeconds = (h*3600) + (m*60) + s;    
    })

})