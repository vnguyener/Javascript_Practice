let numbers = [1,2,3,4,5,6,7,8,9,10];
function reverse(array) {
    var output = "";

    for(var i=(array.length); i > 0; i--) {
        output += array[i-1] + " ";
    }
    console.log(output);
}

reverse(numbers);
