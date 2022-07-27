// used ts-node to exec this typescript file. ts-node enables us to execute ts files without needing to compile the file to javascript and then executing it with node 

const arrayone = [7,6,8,9,2,25]

const arraytwo = [6,8,9,2,25]

const arraythree = [6,8,9,2,25,7]

function arrayCompare(a1: number[], a2: number[]): boolean {

    if(a1.length !== a2.length) return false
    
    a1.sort()
    a2.sort()

    for (let i = 0; i < a1.length ; i++) {
        if(a1[i] !== a2[i]) return false
    }

    return true
}

console.log('are arrayone and arraytwo equal? ' + arrayCompare(arrayone,arraytwo))
console.log('are arrayone and arraythree equal? ' + arrayCompare(arrayone,arraythree))
console.log('are arraythree and arraytwo equal? ' + arrayCompare(arraythree,arraytwo))

