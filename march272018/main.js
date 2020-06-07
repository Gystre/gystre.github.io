$(document).ready(function(){
  $("input").blur(function(){
    $(this).css("background-color", "#ffffff");
  });
  
  $("input").focus(function(){
    $(this).css("background-color", "#cccccc");
  });
  
  $("#hideprojects").click(function(){
    $("#news").fadeToggle();
    $("#plural").fadeToggle("slow");
    $("#howto").fadeToggle(1000);
    $("#quad").fadeToggle(1500);
    $("#passwordgen").fadeToggle(1850);
  });
  
  $("#home").mouseleave(function(){
    $(this).fadeTo("slow", 0.5);
  });
  
  $("#home").mouseenter(function(){
    $(this).fadeTo("slow", 1);
  });
});

function date(){
  var words = document.getElementById("date").innerHTML = Date();
}

date();
