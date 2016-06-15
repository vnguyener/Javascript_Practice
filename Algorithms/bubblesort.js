let bubbleSort = (array) => {
    let hasHadChange;
    for(let i = 0; i < array.length - 1; i++) {
        hasHadChange = false;
        for(let x = 0; x < array.length - 1; x++) {
            if(array[x] > array[x + 1]) {
                hasHadChange = true;
                let temp = array[x];
                array[x] = array[x + 1];
                array[x + 1] = temp;
            }
        }
        if (!hasHadChange) {
            return array;
        }
    }
    return array;
}

// hasHadChange optimize check
// outer for loop to traverse by n times
// inner loop goes through entire array and compares through the array
// if left is large we swap