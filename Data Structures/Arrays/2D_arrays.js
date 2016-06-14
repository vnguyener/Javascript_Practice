var array = [
[1, 1, 1, 0, 0, 0],
[0, 1, 0, 0, 0, 0],
[1, 1, 1, 0, 0, 0],
[0, 0, 2, 4, 4, 0],
[0, 0, 0, 2, 0, 0],
[0, 0, 1, 2, 4, 0],
];
var highestSum = -63;

function findHourGlasses(array){

    var count = 0;
    var n = 0
    var step = (array.length - 2);
    var iterations = step * (array[0].length - 2);

    for (i = 1; i <= iterations; i++) {

        var row1 = array[count][n] + array[count][n + 1] + array[count][n + 2];
        var row2 = array[count + 1][n + 1];
        var row3 = array[count + 2][n] + array[count + 2][n + 1] + array[count + 2][n + 2];

        var hourglassSum = row1 + row2 + row3;

        n = n + 1;

        if ( highestSum < hourglassSum ) { 
            highestSum = hourglassSum; 
        }

        if ( array[count][n + 2] === undefined ) { 
            count = count + 1; 
            n = 0; 
        }
    }
}
findHourGlasses(array);
console.log(highestSum);