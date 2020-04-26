//aabbccc
export const encodeString = (str) => {
  let encodedString = "";
  // check for nulls
  if (!str) return encodedString;
  // split string to array.
  const strArray = str.split("");
  let previousCharacter = "";
  let counter = 0;
  // iterate

  strArray.forEach(currentCharacter => {
    if (currentCharacter == previousCharacter) {
      counter++;
    } else if (currentCharacter != previousCharacter) {
      // if the previous character is "" - our initial value then we set and start else we know it's ended
      if (previousCharacter != "") {
        encodedString += `${counter}${previousCharacter}`
      }
      previousCharacter = currentCharacter;
      counter = 1;
    }
  });

  encodedString += `${counter}${previousCharacter}`

  return encodedString;
};

//2a2b2c
export const decodeStringToLiteral = (str) => {
  let decodedString = "";
  if (!str) return decodedString;
  if (!/^[0-9]$/.test(str.charAt(0))) str = `${1}${str}`; // if there isn't a number infront of the first character we assume it's a 1

  let map = new Map();
  const strArray = str.split("");

  for (let i = 0; i < strArray.length; i++) {
  	if (/^[0-9]$/.test(strArray[i])) {
    	map.set(strArray[i+1], strArray[i])
    }
  }

  for (let [key, val] of map) {
    for (let i = 0; i < val; i++) {
      decodedString += key;
    }
  }

	return decodedString;
};

