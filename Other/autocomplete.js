//<input type="text" onkeyup="changeInput(this.value)">
//<div id="result"></div>

var people = ["Vu", "Sujita", "Appa"];

function findPeople(input, array) {
    var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    return array.filter(function(e) {
        if (e.match(reg)) {
            return e;
        }
    })
}

function changeInput(value) {
    var results = findPeople(value);
    document.getElementById("result").innerHTML = results;
}


// on keyup we grab the input
// pass it back to our filter or db query from an ajax
// do some sql like from where column name is like %input%


let substringAutoComplete = (string, array) => {
  var match = [];
  array.forEach(function(value) {
    if (value.includes(string)) {
      match.push(value);
    }
  })
  return match;  
}

let onInputChange = (value) => {
  let arryay = ['vu', 'sujita', 'appa', 'apples'];
  let results = substringAutoComplete(value, arryay);
  console.log(results);
  document.getElementById("result").innerHTML = results;
}
