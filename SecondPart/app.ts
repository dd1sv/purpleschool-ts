// Продвинутые
// union type
const arr = ['sdf', 1]

function logId(id: string | number | boolean) {
    if (typeof id === 'string') {
        console.log(id)
    } else if (typeof id === 'number') {
        console.log(id)
    } else {
        console.log(id)
    }
} 

function logError(err: string | string[]){
    if (Array.isArray(err)) {
        console.log(err)
    } else {
        console.log(err)
    }
}

function logObj(obj : {a: number} | {b :string[]}){
    if ('a' in obj) {
        console.log(obj)
    } else {
        console.log(obj)
    }
}

// Literla Types

// Example
enum RequestType  {
    GET = 'get',
    POST = 'post'
}
function fetchWithAuth(url : string, method: 'RequestType') {

}


function fetchWithAuthSecond(url : string, method: 'post' | 'get') {

}

fetchWithAuthSecond('s', 'get')

const a = 'asds'

let method = 'post'

fetchWithAuthSecond('s', method as 'post')
// Types Alases -(additional)

type httpMethod = 'post' | 'get';

type coolString = string;

type Userok = {
    name:string,
    age:  number,
    skills: string[]
}

type Role = {
    nmae: string,
    id: number;
}

// type UserWithRole = Userok & Role;
type UserWithRole = {
    user: Userok,
    role: Role
}


let userok: UserWithRole = {
    name: 'asd',
    age: 33,
    skills: ['1', ''],
    id: 1
}

function fetchWithAuthThird(url : string, method: httpMethod) {

}