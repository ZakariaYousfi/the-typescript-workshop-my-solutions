


function myFunction (name : string = 'world'): string {
    return ('hello ' + name)
}

const helloWorld = myFunction()

const hellReader = myFunction('Reader')

const readBook = (title: string, ...chapters: number[]) => {

    console.log('reading : ' + title)

    chapters.forEach( (chapter) => {
        console.log('reading chapter: ' + chapter)
    })

    console.log('finished reading')
}

readBook('deep learning with python',1,2,3)

function paritySort(...numbers : number []) : { evens: number[], odds: number[]} { // learned destructuring when i learned react

        return {
            evens: numbers.filter(n => n%2 === 0) ,
            odds: numbers.filter(n => n%2 !== 0)
        }
}

const { evens, odds } = paritySort(1,2,3,4)

console.log('evens : ' + evens)
console.log('odds : ' + odds)




const testV: ( number | string ) []= ['hello',5,'wow']

testV.forEach( elm => console.log(elm.toString()))

// used ts-node to execute the code from here on 

const arrayFilter = {
    max: 3,
    filter: function (...numbers: number[]) {
        return numbers.filter( (val) => {
            return val <= this.max;
        })
    }
}

console.log(arrayFilter.filter(1,2,3,4))


let next = 0
let inc = 1
let current = 0

const myFunc = (): void => {
    
for(let i = 0; i<10; i++) {
    [current,next,inc] = [next, inc, next+inc]
    console.log(current)
} 
}

myFunc()

for(let i = 0; i<10; i++) {
    [current,next,inc] = [next, inc, next+inc]
    console.log(current)
}
