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