// find the longest substring without repeating characters

function findLongestUniqueSubString(input) {
    var tempString = "";
    var longestString = "";
    var hash = {};
    
    for (var i = 0; i < input.length; i++) {
        currentCharacter = input[i];

        if (!hash[currentCharacter]) {
            tempString += currentCharacter;
            hash[currentCharacter] = {index: i};
        } else {
            if (longestString.length <= tempString.length) {
                longestString = tempString;
            }

            var indexOfFirstDupe = hash[currentCharacter].index;
            var stringTilDupe = input.substring(indexOfFirstDupe + 1, i);
            tempString = stringTilDupe + currentCharacter;

            hash = {};
            for (var x = indexOfFirstDupe + 1; x <= i; x++) {
                hash[input.charAt(x)] = {index: x};
            }
        }
    }

    return (longestString.length > tempString.length) == true ? longestString : tempString;
}

console.log(findLongestUniqueSubString('qwertyuiopqwer'));

function findLongestNonRepeatingSubStr(input) {
    var chars = input.split('');
    var currChar;
    var str = "";
    var longestStr = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
        currChar = chars[i];
        if (!hash[chars[i]]) { // if hash doesn't have the char,
            str += currChar; //add it to str
        hash[chars[i]] = {index:i};//store the index of the char
    } else {// if a duplicate char found..
        //store the current longest non-repeating chars. until now
        //In case of equal-length, <= right-most str, < will result in left most str
        if(longestStr.length <= str.length) {
            longestStr = str;
        }
        //Get the previous duplicate char's index
        var prevDupeIndex = hash[currChar].index;

        //Find all the chars AFTER previous duplicate char and current one
        var strFromPrevDupe = input.substring(prevDupeIndex + 1, i);
        //*NEW* longest string will be chars AFTER prevDupe till current char
        str = strFromPrevDupe + currChar;
        //console.log(str);
        //Also, Reset hash to letters AFTER duplicate letter till current char
        hash = {};
        for (var j = prevDupeIndex + 1; j <= i; j++) {
            hash[input.charAt(j)] = {index:j};
        }
    }
  }
  return longestStr.length > str.length ? longestStr : str;
}