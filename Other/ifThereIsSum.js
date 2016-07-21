let quickSort = (array) => {

  if (array.length <= 1) return array
  
  let swapPosition = Math.floor((array.length - 1) / 2);
  let swapValue = array[swapPosition];
  let less = [];
  let more = [];

  array = array.slice(0, swapPosition).concat(array.slice(swapPosition + 1));
  for (let i = 0; i < array.length; i++) {
    if (array[i] < swapValue) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return (quickSort(less)).concat([swapValue], quickSort(more));
}

let ifSumExists = (array, threshold) => {
  let sortedArray = quickSort(array);
  let lowerHalf = sortedArray.splice(0, sortedArray.indexOf(threshold));
  lowerHalf.forEach(num => {
  	let missingLink = 12 - num;
    if(lowerHalf.indexOf(missingLink) > -1) {
    	console.log(num + "+" + missingLink + " = " + threshold + ", so true!");
    }
  });
}


ifSumExists([1, 2, 3, 6, 7, 8, 9, 12, 35, 100, 2, 3], 12)
