var nums = new Array(   );
var sorted = false;

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function generate(){
    var div = document.getElementById("element-container");
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
        element.style.display = "inline-block";
        element.style.marginLeft = 6;
        element.style.backgroundColor = "rgba(128, 255, 229, 0.75)";
        element.style.height = 20*(nums[i] / size) + 15;
        element.style.width = 9*(nums[i] / size) + 10;
        element.style.fontFamily = "Arial";
        element.style.padding = "2px";
        if(size > 100){
            element.style.color = "transparent";
        }else{
            element.style.fontSize = 4/size + 10;
        }
        document.getElementById("element-container").append(element);
    }

    sorted = false;
}

//merge two halves of arr[l->m] and arr[m+1->r] into arr[]
function merge(arr, l, m, r){
    var n1 = m-l+1;
    var n2 = r-m;

    var L = new Array(n1);
    var R = new Array(n2);

    for(var i = 0; i < n1; i++){
        L[i] = arr[l+i];
    }
    for(var i = 0; i < n2; i++){
        R[i] = arr[m+1+i];
    }

    var i = 0;
    var j = 0;
    var left_start = l;

    //break down and sort
    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[left_start] = L[i];
            i++;
        }else{
            arr[left_start] = R[j];
            j++;
        }
        left_start++;
    }

    //copy remaining elements of each array, prevents duplicates
    while(i < n1){
        arr[left_start] = L[i];
        i++;
        left_start++;
    }

    while(j < n2){
        arr[left_start] = R[j];
        j++;
        left_start++;
    }

}

function partition(arr, low, high){
    var pivot = arr[high];
    var index = low-1; //index of smaller element

    for(var i = low; i <= high; i++){
        //if current element < pivot, increment index of smaller element and swap
        if(arr[i] < pivot){
            index++;
            // document.getElementById(i).style.backgroundColor = "rgb(255, 0, 0)";
            // document.getElementById(index).style.backgroundColor = "rgb(255, 0, 0)";

            //await sleep(document.getElementById("delay").value);
            // var tempdiv = document.getElementById(index);
            // var tempHeight = tempdiv.style.height;
            // var tempText = tempdiv.innerHTML;
            // document.getElementById(index).innerHTML = document.getElementById(i).innerHTML;
            // document.getElementById(index).style.height = document.getElementById(i).style.height;
            // document.getElementById(i).innerHTML = tempText;
            // document.getElementById(i).style.height = tempHeight;

            var temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;

            // await sleep(document.getElementById("delay").value);
            // document.getElementById(i).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
            // document.getElementById(index).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
        }
    }

    // document.getElementById(high).style.backgroundColor = "rgb(255, 0, 0)";
    // document.getElementById(index+1).style.backgroundColor = "rgb(255, 0, 0)";

    // await sleep(document.getElementById("delay").value);
    // var tempdiv = document.getElementById(index+1);
    // var tempHeight = tempdiv.style.height;
    // var tempText = tempdiv.innerHTML;
    // document.getElementById(index+1).innerHTML = document.getElementById(high).innerHTML;
    // document.getElementById(index+1).style.height = document.getElementById(high).style.height;
    // document.getElementById(high).innerHTML = tempText;
    // document.getElementById(high).style.height = tempHeight;

    var temp = arr[index+1];
    arr[index+1] = arr[high];
    arr[high] = temp;
    
    // await sleep(document.getElementById("delay").value);
    // document.getElementById(high).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
    // document.getElementById(index+1).style.backgroundColor = "rgba(128, 255, 229, 0.75)";


    return index + 1;
}

function quickSort(arr, low, high){
    if(low < high){
        var index = partition(arr, low, high);
        
        quickSort(arr, low, index-1); //before the partitioning index
        quickSort(arr, index+1, high); //after the partitioning index
    }
}

const sort = async() => {
    if(sorted)
        generate();

    document.getElementById("sort-button").style.pointerEvents = "none";
    document.getElementById("sort-button").innerHTML = "Wait!";
    var sel = document.getElementById("selection");
    if(sel.value === "bubble"){
        for(var i = 0; i < nums.length; i++){
            for(var c = 1; c < nums.length-i; c++){
                if(nums[c-1] > nums[c]){
                    //would turn this into a function but javascript cant pass by reference :P
                    document.getElementById(c).style.backgroundColor = "rgb(255, 0, 0)";
                    document.getElementById(c-1).style.backgroundColor = "rgb(255, 0, 0)";
                    await sleep(document.getElementById("delay").value);

                    //visual swap
                    var tempdiv = document.getElementById(c-1);
                    var tempHeight = tempdiv.style.height;
                    var tempText = tempdiv.innerHTML;
                    document.getElementById(c-1).innerHTML = document.getElementById(c).innerHTML;
                    document.getElementById(c-1).style.height = document.getElementById(c).style.height;
                    document.getElementById(c).innerHTML = tempText;
                    document.getElementById(c).style.height = tempHeight;
                    
                    //code swap
                    var temp = nums[c-1];
                    nums[c-1] = nums[c];
                    nums[c] = temp;

                    await sleep(document.getElementById("delay").value);
                    document.getElementById(c).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
                    document.getElementById(c-1).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
                }
            }
        }
    }else if(sel.value === "merge"){
        for(var i = 1; i <= nums.length-1; i *= 2){
            for(var left_start = 0; left_start < nums.length-1; left_start += 2*i){
                var mid = Math.min(left_start+i-1, nums.length-1);
                var right_end = Math.min(left_start + 2*i-1, nums.length-1);
                document.getElementById(mid).style.backgroundColor = "rgb(255, 0, 0)";
                document.getElementById(right_end).style.backgroundColor = "rgb(255, 0, 0)";

                await sleep(document.getElementById("delay").value);
                merge(nums, left_start, mid, right_end);

                document.getElementById(mid).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
                document.getElementById(right_end).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
            }
        }
    }else if(sel.value === "quick"){
        quickSort(nums, 0, nums.length-1);
        // var low = 0;
        // var high = nums.length-1;
        // while(low < high){
        //     var index = partition(nums, low, high);
        //     index = partition(nums, low, index-1);
        //     high -= 1;
        //     index = partition(nums, index+1, high);
        //     low += 1;
    
        // }
        // console.log(nums);
    }


    document.getElementById("sort-button").innerHTML = "Done!"
    await sleep(500);
    document.getElementById("sort-button").style.pointerEvents = "auto";
    document.getElementById("sort-button").innerHTML = "Sort";
    sorted = true;
}

document.addEventListener('keydown', function(event) {
    if(event.key == "Enter"){
        sorted = false;
        generate();
    }
});

$(document).ready(function(){
    generate();
});