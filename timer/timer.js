var sec = 0;
var started = false;
var countdown;

function timedCount(){
    document.getElementById("time").innerHTML = sec;
    sec--;
    countdown = setTimeout(timedCount, 1000);
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
    sec = document.getElementById("seconds").value;
    document.getElementById("time").innerHTML = sec;
    clearTimeout(countdown);
    started = false;
}

$(document).ready(function(){
    $("#seconds").change(function(){
        sec = document.getElementById("seconds").value;
        document.getElementById("time").innerHTML = sec;    
    })
})