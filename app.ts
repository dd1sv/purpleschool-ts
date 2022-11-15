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
    if ('a' in obj)) {
        console.log(err)
    } else {
        console.log(err)
    }
}
