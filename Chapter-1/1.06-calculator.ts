
// in this exercise we're going to create a calculator

// this is a classical problem in that we're able to use a switch statement and make the correct operations. i was surprised with the books's approach



// first we declare a enum since we know we only have 4 types of operations, it makes sense to put them in a enumeration

enum Operator {

    Add = 'add',
    Subtract = 'subtract',
    Multiply = 'multiply',
    Divide = 'divide',
    Modulo = 'modulo'

}

// define a type alias for an operation - this is so that we can later create functions that applies one of the operations and have them conform to this type

type Operation = (x:number, y:number) => number

// declare an array that contains tuples - the tuples will contain the Operator which is going to be a enum value, and it's counterpart Operation function

const operations : [Operator,Operation][] = []

// declaring a function for each operation then pushing into the previous array the respected tuples

const add = (x: number,y: number) => x+y

operations.push([Operator.Add,add]);

const subtract = (x: number,y: number) => x-y

operations.push([Operator.Subtract,subtract]);

const multiply = (x: number,y: number) => x*y

operations.push([Operator.Multiply,multiply]);

const divide = (x: number,y: number) => x/y

operations.push([Operator.Divide,divide]);

const modulo = (x: number, y: number ) => x%y

operations.push([Operator.Modulo,modulo])

// finally we're going to build the main function where we're able to do the appropriate operation

function calculator ( x: number, y: number, Op: Operator){
        
        // search in the array for the approprite function depending on the Operation 

        const tuple = operations.find((tuple) => tuple[0] === Op)

        // checking if the find returned something. we can force typescript to always think it will return something by inserting an exclamation mark after tuple in 'const operation = tuple[1]' so it becomes like this 'const operation = tuple![1]' then we're able to remove the if(tuple) statement

        if(tuple) {
        const operation = tuple[1]
        const result = operation(x,y);
        return result
        }

}


// testing calls 

console.log(calculator(5,15,Operator.Add))
console.log(calculator(18,-2,Operator.Subtract))
console.log(calculator(4,5,Operator.Multiply))
console.log(calculator(360,18,Operator.Divide))
console.log(calculator(100,80,Operator.Modulo))



