let quickSort = (array) => {
    // base case 
    if (array.length <=1) return array;
    // find swap position and value
    let swapPosition = Math.floor((array.length - 1)/2);
    let swapValue = array[swapPosition];
    let less = [];
    let more = [];

    array = array.slice(0, swapPosition).concat(array.slice(swapPosition + 1));
    for(let i = 0; i < array.length; i ++) {
        if(array[i] < swapValue) {
            less.push(array[i]);
        } else {
            more.push(array[i]);
        }
    }
    console.log('array', array)
    console.log('less', less)
    console.log('more', more)
    return (quickSort(less)).concat([swapValue], quickSort(more));
}

let arryay = [1,4,15,23,2,3,4,7,55,100,101,3]
console.log(quickSort(arryay))

// divide and conquer sort with an array
// finds pivot point and sorts left and right of the pivot point
// calling quick sort on both sides