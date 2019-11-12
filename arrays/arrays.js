//to fix quick sort, need to convert recursion
//to fix merge sort, need to learn how merge sort works

var nums = new Array();
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
        element.style.marginLeft = 80 / size + 3;
        element.style.backgroundColor = "rgba(128, 255, 229, 0.75)";
        element.style.height = 20*(nums[i] / size*5) + 15;
        element.style.width = 9*size + 10;
        element.style.padding = "2px";
        if(size > 50){
            element.style.fontSize = 0;
            element.style.width = 3 / (9*size + 10);
        }else{
            element.style.fontSize = 80/ size + 10;
        }
        document.getElementById("element-container").append(element);
    }

    document.getElementById(nums.length-1).style.marginRight = 80 / size + 3;

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

    //break down array into smallest units
    while(i < n1 && j < n2){
        if(L[i] <= R[j]){
            arr[left_start] = L[i];
            i++;
        }else{
            arr[left_start] = R[j];
            j++;
        }
        document.getElementById(left_start).style.backgroundColor = "rgb(255, 0, 0)";
        left_start++;
    }


    //take remaining elements of left array 
    while(i < n1){
        arr[left_start] = L[i];
        document.getElementById(i).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
        i++;
        left_start++;

    }

    while(j < n2){
        arr[left_start] = R[j];
        document.getElementById(j).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
        j++;
        left_start++;
    }

}

function partition(arr, low, high) {
    var pivot = arr[high];
    var index = low-1; //index of smaller element

    for(var i = low; i <= high; i++){
        //if current element < pivot, increment index of smaller element and swap
        if(arr[i] < pivot){
            index++;
            document.getElementById(i).style.backgroundColor = "rgb(255, 0, 0)";
            document.getElementById(index).style.backgroundColor = "rgb(255, 0, 0)";

            // await sleep(document.getElementById("delay").value);
            var tempdiv = document.getElementById(index);
            var tempHeight = tempdiv.style.height;
            var tempText = tempdiv.innerHTML;
            document.getElementById(index).innerHTML = document.getElementById(i).innerHTML;
            document.getElementById(index).style.height = document.getElementById(i).style.height;
            document.getElementById(i).innerHTML = tempText;
            document.getElementById(i).style.height = tempHeight;

            var temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;

            // await sleep(document.getElementById("delay").value);
            document.getElementById(i).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
            document.getElementById(index).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
        }
    }

    document.getElementById(high).style.backgroundColor = "rgb(255, 0, 0)";
    document.getElementById(index+1).style.backgroundColor = "rgb(255, 0, 0)";

    // await sleep(document.getElementById("delay").value);
    var tempdiv = document.getElementById(index+1);
    var tempHeight = tempdiv.style.height;
    var tempText = tempdiv.innerHTML;
    document.getElementById(index+1).innerHTML = document.getElementById(high).innerHTML;
    document.getElementById(index+1).style.height = document.getElementById(high).style.height;
    document.getElementById(high).innerHTML = tempText;
    document.getElementById(high).style.height = tempHeight;

    var temp = arr[index+1];
    arr[index+1] = arr[high];
    arr[high] = temp;
    
    // await sleep(document.getElementById("delay").value);
    document.getElementById(high).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
    document.getElementById(index+1).style.backgroundColor = "rgba(128, 255, 229, 0.75)";


    return index + 1;
}

function quickSort(low, high) {
    if(low < high){
        var index = partition(nums, low, high);
        quickSort(low, index-1); //before the partitioning index
        quickSort(index+1, high); //after the partitioning index
    }
}

async function otherQuickSort(arr, size){
    var MAX_LEVELS = 5; //how many elements in beg and end sub partitions, will never really exceed 2+
    var pivot;
    var beg = new Array(MAX_LEVELS);
    var end = new Array(MAX_LEVELS);
    var i = 0;
    var L, R;

    beg[0] = 0;
    end[0] = size;

    while(i >= 0){
        L = beg[i];
        R = end[i]-1;

        if(L < R){
            pivot = arr[L];
            while(L < R){
                while(arr[R] >= pivot && L < R){
                    R--;
                }

                if(L < R){
                    arr[L++] = arr[R];
                }

                while(arr[L] <= pivot && L < R){
                    L++;
                }

                if(L < R){
                    arr[R--] = arr[L];
                }
            }
            arr[L] = pivot;
            beg[i+1] = L+1;
            end[i+1] = end[i];
            end[i++] = L;

            if(end[i]-beg[i] > end[i-1]-beg[i-1]){
                // document.getElementById(i).style.backgroundColor = "rgb(255, 0, 0)";
                // document.getElementById(i-1).style.backgroundColor = "rgb(255, 0, 0)";
                
                // var tempdiv = document.getElementById(i);
                // var tempHeight = tempdiv.style.height;
                // var tempText = tempdiv.innerHTML;
                // document.getElementById(i).innerHTML = document.getElementById(i-1).innerHTML;
                // document.getElementById(i).style.height = document.getElementById(i-1).style.height;
                // document.getElementById(i-1).innerHTML = tempText;
                // document.getElementById(i-1).style.height = tempHeight;

                var temp = beg[i];
                beg[i] = beg[i-1];
                beg[i-1] = temp;

                // document.getElementById(i).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
                // document.getElementById(i-1).style.backgroundColor = "rgba(128, 255, 229, 0.75)";            

                temp = end[i];
                end[i] = end[i-1];
                end[i-1] = temp;
            }
        }else{
            i--;
        }
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

                await sleep(document.getElementById("delay").value);
                merge(nums, left_start, mid, right_end);

            }
        }
    }else if(sel.value === "quick"){
        //quickSort(0, nums.length-1);
        otherQuickSort(nums, nums.length);
        // var low = 0;
        // var high = nums.length-1;
        // while(low < high){
        //     var index = partition(low, high);

        // }
        console.log(nums);
    }else if(sel.value === "selection"){
        for(var i = 0; i < nums.length-1; i++){
            for(var c = i+1; c < nums.length; c++){
                if(nums[i] > nums[c]){
                    document.getElementById(c).style.backgroundColor = "rgb(255, 0, 0)";
                    document.getElementById(i).style.backgroundColor = "rgb(255, 0, 0)";
                    await sleep(document.getElementById("delay").value);

                    //visual swap
                    var tempdiv = document.getElementById(i);
                    var tempHeight = tempdiv.style.height;
                    var tempText = tempdiv.innerHTML;
                    document.getElementById(i).innerHTML = document.getElementById(c).innerHTML;
                    document.getElementById(i).style.height = document.getElementById(c).style.height;
                    document.getElementById(c).innerHTML = tempText;
                    document.getElementById(c).style.height = tempHeight;
                    
                    //code swap
                    var temp = nums[i];
                    nums[i] = nums[c];
                    nums[c] = temp;

                    await sleep(document.getElementById("delay").value);
                    document.getElementById(c).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
                    document.getElementById(i).style.backgroundColor = "rgba(128, 255, 229, 0.75)";
                }
            }
        }
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


function update(){
    var sel = document.getElementById("selection");
    if(sel.value === "selection"){
        document.getElementById("desc").innerHTML = "Selection sort is an iterative sorting algorithm. It maintains two subarrays, one for all the unsorted elements and one for all the unsorted elements. The sort begins by finding the minimum element in the unsorted sub array and moves it to the sorted subarray (the back of the array)";
        document.getElementById("comp").innerHTML = "comparisons: O(n<sup>2</sup>)";
        document.getElementById("swap").innerHTML = "swaps: O(n)";
    }else if(sel.value === "bubble"){
        document.getElementById("desc").innerHTML = "nope";
    }
}

$(document).ready(function(){
    generate();
    update();

    $("#selection").change(function(){
        update();
    })
});
