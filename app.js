// Types:
// 1. number
// 2. string
// 3. boolean
var dollars = 3000;
// Types in functions:
// function getName(firstName: string, surname: string): string{
//     return (`${firstName} ${surname}`)
// }
// const getNameArrow = (firstName: string, surname: string): string =>{
//     return (`${firstName} ${surname}`)
// }
// console.log(getName('asd', 'asd'))
// objects
function getName(userEntity) {
    return (userEntity.firstName + " " + userEntity.surname);
}
var user = {
    firstName: '123',
    surname: '2222',
    city: 'SPB',
    age: 33
};
console.log(getName(user));
