
// Exercises where too basic to be done, felt more like a practice to type javascript since the concepts on this chapter are not complex

// type alias 

type Animal = {
    id: string,
    food: string[],
    children?: Animal[]
}

const cat : Animal = {
    id: 'c1',
    food: ['meat','milk','cheese'],
    children: [{id: 'c2', food:['milk']}]
}


// type literal 

type Hello  = "Hello"

function MustSayHello(hello: Hello) {
    console.log('hello back to you!')
}

// type intersection 

type objFirstHalf = {
    firstname: string,
    age: number
}

type objOtherHalf = {
    lastname: string,
    tel?: string
}

type obj = objFirstHalf & objOtherHalf

const object : obj =  {
    firstname: 'object',
    lastname: '',
    age: 0
}

const object2 : objFirstHalf & objOtherHalf = {
    firstname: 'object',
    lastname: '2',
    age: 0
}

// union types

type Age = number | string

function myAge ( age: Age ) : Age {

    let temp = 'your age : '

    return (typeof age === 'number' ?  temp + age + ' is a number' :  typeof age === 'string' ? temp + age + ' is a string' : 'your age is not of type: ' + typeof age)

}

// index types 

interface ErrorMessage {
    [msg: number] : string;
    apiId: number
}

const errorMessage : ErrorMessage = {
    0: 'system error',
    1: 'overload',
    apiId: 12345
}

console.log(errorMessage)