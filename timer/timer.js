var totalSeconds = 0;
var started = false;
var countdown;

// function timedCount(){
//     document.getElementById("time").innerHTML = sec;
//     if(totalSeconds == 0){
//         stop();
//     }else{
//         totalSeconds--;
//         countdown = setTimeout(timedCount, 1000);
//     }
// }

function start(){
    var h = parseInt(document.getElementById("hours").value.length == 0 ? 0 : document.getElementById("hours").value);
    var m = parseInt(document.getElementById("minutes").value.length == 0 ? 0 : document.getElementById("minutes").value);
    var s = parseInt(document.getElementById("seconds").value.length == 0 ? 0 : document.getElementById("seconds").value);

    totalSeconds = (h*3600) + (m*60) + s;

    var totalMinutes = totalSeconds / 60;
    var totalHours = totalMinutes / 60;

    // if(!started){
    //     started = true;
    //     timedCount();
    // }

}

// function stop(){
//     clearTimeout(countdown);
//     started = false;
// }

// function reset(){
//     totalSeconds = document.getElementById("seconds").value;
//     document.getElementById("time").innerHTML = totalSeconds;
//     clearTimeout(countdown);
//     started = false;
// }