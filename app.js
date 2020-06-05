$(document).ready(function(){
    if(document.getElementById("date")){
        setInterval(function(){
            document.getElementById("date").innerHTML = new Date();
        } , 100);
    }
});

