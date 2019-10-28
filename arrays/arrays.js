var nums = new Array();
var sorted = false;

function generate(){
    var div = document.getElementById("elementContainer");
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }

    nums = new Array();
    var size = parseInt(document.getElementById("size").value)
    var keys = new Array();

    for(var i = 0; i < size; i++){
        keys[i] = i + 1;
    }

    for(var i = 0; i < size; i++){
        var rand = Math.floor(Math.random() * keys.length);

        nums[i] = keys[rand];
        keys.splice(rand, 1);
        var element = document.createElement("DIV");
        element.id = i;
        element.innerHTML = nums[i];
        document.getElementById("elementContainer").append(element);
    }

    sorted = false;
}

function sort(){
    if(sorted)
        generate();

    var sel = document.getElementById("selection");
    if(sel.value = "bubble"){
        for(var i = 0; i < nums.length; i++){
            for(var c = 1; c < nums.length-i; c++){
                if(nums[c-1] > nums[c]){
                    //swap
                    var tempdiv = document.getElementById(c-1).innerHTML;
                    var temp = nums[c-1];
                    document.getElementById(c-1).innerHTML = document.getElementById(c).innerHTML;
                    nums[c-1] = nums[c];
                    document.getElementById(c).innerHTML = tempdiv;
                    nums[c] = temp;
                }
            }
        }
        console.log(nums);
        // var temp = document.getElementById("0").innerHTML;
        // document.getElementById("0").innerHTML = document.getElementById("9").innerHTML;
        // document.getElementById("9").innerHTML = temp;
    }

    sorted = true;
}

$(document).ready(function(){
    generate();
});