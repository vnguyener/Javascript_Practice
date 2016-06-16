// most common words in string

function findMostCommonWords(string) {
    var commonWords = {};
    var words = string.split(/\s/);


for (var i = 0; i < words.length; i++) {
    commonWords['_' + words[i]] = (commonWords['_' + words[i]] || 0) + 1;
}

console.table(commonWords);

}