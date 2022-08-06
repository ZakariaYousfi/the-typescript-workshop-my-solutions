
type User = {
    email:string,
    userId: number
}

interface SuperAddMe {
    (user: User) : User[]
}

let allUsers: User[] = [{
    email: 'yo@yes.no', userId: 666}
, {
    email:'intredasting@mail.com',userId: 420
}]


let adduser: SuperAddMe = function (user: User) : User[] {

    return [
        ...allUsers, user
    ]
} 

console.log( adduser ( {email: 'jaofjzrfa',userId: 999}))







