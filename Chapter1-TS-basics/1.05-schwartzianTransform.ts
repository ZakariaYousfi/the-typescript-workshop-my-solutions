// the schwartzian transform 

/*
    the problem: when we used the sort algorithm to sort an array of Person objects, we had to transform our Person Objects to strings then compare them. the result is that we are wasting a decent amount of resources that could otherwise be avoided. this is an algorithms and data structures problem.

function getFullName (person: Person) {                          // this is the function to get the fullname to use in the comparison
return `${person.firstName} ${person.lastName}`;
}

persons.sort((first, second) => {                               // this is the problematic sort algorithm
const firstFullName = getFullName(first);                       // getFullname is called on each compared element on each comparison => waste of resources
const secondFullName = getFullName(second);
return firstFullName.localeCompare(secondFullName);
})

    the solution: to use what is called the schwartzian transform. in a nutshell, we're going to transform each element in the Person array into a tuple with it's first argument being the original object, and the second argument is the string that we're going to use to compare the elements.

*/


    // let's first declare a Person interface 

interface Person {
    firstname: string,
    lastname: string
}

    // let's declare our array with random data 

const Parr : Array <Person> = [{firstname:'zakaria', lastname:'yousfi'},{firstname:'pasha',lastname:'biceps'},{firstname:'mareks',lastname:'yekindar'},{firstname:'tarik',lastname:'celik'},{firstname:'john',lastname:'doe'},{firstname:'forest',lastname:'lindberg'}]

    // let's declare the getFullName function 

function getFullName (person: Person) { 
    return person.firstname + ' ' + person.lastname
}

    // we're going to use the map method of the array to convert our element to tuple in a new array

let newParr : [Person,string] [] = Parr.map( (person : Person) => {
                                        return [person,getFullName(person)]
}) 

    // sort the array based on the second argument of the elements

newParr.sort( (person1,person2) => {
    return person1[1].localeCompare(person2[1])
})

    // finally bring the elements first argument Person's objects into a new Array 
    
const sortedParr = newParr.map( (person) => {
                                                return person[0];
}) 

    // console.logging the objects in order 

console.log(sortedParr)

for ( const person of sortedParr ) {
    console.log(getFullName(person))
}



