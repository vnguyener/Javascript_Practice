//longest common substrings

//2 strings
function findCommonSubString(array) {
    array.sort();
    
    var i = 0;
    while(i < array[0].length && array[0].charAt(i) === array[1].charAt(i)) {
        i++;
        return array[0].substring(0, i)
    };
}

function sharedStart(array){
    array.sort();
    
    var firstElement = array[0];
    var nextElement = array[array.length - 1];

    var i = 0;

    while(i < firstElement.length && firstElement.charAt(i) === nextElement.charAt(i)) {
        i++;
                console.log(firstElement.substring(0, i));

    }
}