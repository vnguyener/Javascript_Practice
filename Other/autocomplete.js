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