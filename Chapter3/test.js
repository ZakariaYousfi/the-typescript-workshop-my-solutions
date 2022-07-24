function myFunction(name) {
    if (name === void 0) { name = 'world'; }
    return ('hello ' + name);
}
var helloWorld = myFunction();
var hellReader = myFunction('Reader');
var readBook = function (title) {
    var chapters = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        chapters[_i - 1] = arguments[_i];
    }
    console.log('reading : ' + title);
    chapters.forEach(function (chapter) {
        console.log('reading chapter: ' + chapter);
    });
    console.log('finished reading');
};
readBook('deep learning with python', 1, 2, 3);
function paritySort() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return {
        evens: numbers.filter(function (n) { return n % 2 === 0; }),
        odds: numbers.filter(function (n) { return n % 2 !== 0; })
    };
}
var _a = paritySort(1, 2, 3, 4), evens = _a.evens, odds = _a.odds;
console.log('evens : ' + evens);
console.log('odds : ' + odds);
var testV = ['hello', '5', 'wow'];
testV.forEach(function (elm) { return console.log(elm.indexOf('o')); });
