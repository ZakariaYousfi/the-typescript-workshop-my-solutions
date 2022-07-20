// the schwartzian transform 
// let's declare our array with random data 
var Parr = [{ firstname: 'zakaria', lastname: 'yousfi' }, { firstname: 'adel', lastname: 'touzaline' }, { firstname: 'ayoub', lastname: 'rezine' }, { firstname: 'youcef', lastname: 'yousfi' }, { firstname: 'john', lastname: 'doe' }];
// let's declare the getFullName function 
function getFullName(person) {
    return person.firstname + ' ' + person.lastname;
}
// we're going to use the map method of the array to convert our element to tuple in a new array
var newParr = Parr.map(function (person) {
    return [person, getFullName(person)];
});
// sort the array based on the second argument of the elements
newParr.sort(function (person1, person2) {
    return person1[1].localeCompare(person2[1]);
});
// finally bring the elements first argument Person's objects into a new Array 
var sortedParr = newParr.map(function (person) {
    return person[0];
});
// console.logging the objects in order 
for (var _i = 0, sortedParr_1 = sortedParr; _i < sortedParr_1.length; _i++) {
    var person = sortedParr_1[_i];
    console.log(getFullName(person));
}
