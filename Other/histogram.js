Histogram:

0 *
1 ***
2 ****
4 *****
5 ***
6 *

// Write a function to determine if this is a normal distribution (bell curve).

var data = [1,3,4,5,4,2,1];
data = [1, 2, 3, 4, 3, 2];
data = [1, 2, 3, 18, 17, 16];

function isBellCurve(array) {

    var isEven = (array.length % 2 = 0) === true ? true: false;    
    var less = [];
    var more = [];
    var isLessDecline;
    var isMoreDecline;
    var median;
    var sharedMedian;
    var deviation = 1;
    
    if (isEven) {
        median = Math.floor((array.length)/2);
        sharedMedian = median + 1;
        
        if (array[sharedMedian] - deviation != array[median] || 
            array[sharedMedian] + deviation != array[median]) {
            return false;
        }
        else {
            //do stuff
        }
    }
    else {
        median = Math.floor((array.length -1)/2);
                
        array = array.slice(0, median).concat(array.slice(median +1));
            //if indexes less than the medium 
        less = array.slice(0, median-1);
        
        more = array.slice(median +1, array.length);
        //if indexes are more than the medium
        
        //evaluate less array
        for(var x = 0; i < less.length -1; i++) {
            isLessDecline = (less[i] < less[i+1]) === true ? true : false;
        }  
        
        //evaluate more array   
        for(var x = 0; i < more.length -1; i++) {
            isMoreDecline = (more[i] > more[i+1]) === true ? true : false;
        }
    }
    
    return isLessDecline && isMoreDecline;         
}