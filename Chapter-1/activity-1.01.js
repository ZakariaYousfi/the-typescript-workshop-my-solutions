// the goal is to create a bunch of functions that would perform some common operations on strings. basically a library for working with strings.
// first function is toTitleCase : it capitalizes the first letter in each word in the string but also lowercasing all other characters.
function toTitleCase(str) {
    // first let's lowercase all the characters:
    var temp = '';
    var count = str.length;
    var i = 0;
    var og = str.trim();
    // taking care of the first letter
    if (og !== '') {
        temp += og[0].toUpperCase();
        i++;
    }
    // taking care of the rest of the letters. if there is a seperator then uppercase the next letter else lowercase the current letter
    while (i < count) {
        if (og[i] === ' ' || og[i] === '-' || og[i] === '_') {
            temp += og[i];
            temp += og[i + 1].toUpperCase();
            i += 2;
        }
        else {
            temp += og[i].toLowerCase();
            i += 1;
        }
    }
    return temp;
}
console.log(toTitleCase('war AND peace'));
console.log(toTitleCase('Catcher in the Rye'));
console.log(toTitleCase('tO kILL A mOCKINGBIRD'));
// countWords function: counts the number of words in a string
function countWords(str) {
    var count = 0;
    var i = 0;
    var temp = str.trim();
    if (temp[0] !== '')
        count++;
    while (i < temp.length) {
        if (temp[i] === ' ' || temp[i] === '-' || temp[i] === '_') {
            count += 1;
            i++;
        }
        else {
            i++;
        }
    }
    return count;
}
console.log(countWords("War and Peace"));
console.log(countWords("catcher-in-the-rye"));
console.log(countWords("for_whom the-bell-tolls"));
// function toWords : extracts all words in a string and puts them in an array of words
function toWords(str) {
    var regexp = /[ _-]/;
    var words = str.split(regexp);
    return words;
}
console.log(toWords("War and Peace"));
console.log(toWords("catcher-in-the-rye"));
console.log(toWords("for_whom the-bell-tolls"));
//function repeat: repeats a string n number of times
function repeat(str, n) {
    var temp = '';
    for (var i = 0; i < n; i++) {
        temp += str;
    }
    return temp;
}
console.log(repeat('War', 3));
console.log(repeat('Rye', 1));
console.log(repeat('Bell', 0));
// function isAlpha : checks wheter a string contains alpha characters only
function isAlpha(str) {
    var regexp = /[^a-zA-Z0-9]/;
    if (regexp.test(str))
        return false;
    return true;
}
console.log(isAlpha("War and Peace"));
console.log(isAlpha("Atonement"));
console.log(isAlpha("1Q84"));
// function isBlank : return true if function contains only whitespaces character 
function isBlank(str) {
    return str.trim() ? false : true;
}
console.log(isBlank('War And Roses'));
console.log(isBlank('       '));
console.log(isBlank(''));
