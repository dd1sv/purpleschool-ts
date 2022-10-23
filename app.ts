// Types:
// 1. number
// 2. string
// 3. boolean
let dollars: number = 3000



// Types in functions:
// function getName(firstName: string, surname: string): string{
//     return (`${firstName} ${surname}`)
// }

// const getNameArrow = (firstName: string, surname: string): string =>{
//     return (`${firstName} ${surname}`)
// }
// console.log(getName('asd', 'asd'))

// objects
function getName(userEntity: {firstName: string, surname: string}): string{
    return (`${userEntity.firstName} ${userEntity.surname}`)
}

const user = {
    firstName: '123',
    surname: '2222',
    city: 'SPB', 
    age: 33
}

console.log(getName(user))

