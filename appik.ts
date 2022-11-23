// Optional
interface User {
    login: string;
    password?: string;
}

const userTemp: User = {
    login: 'a@a.ru',
    password: '1'
}

function multiply(first: number, second?: number) :number{
    if (!second){
        return first * first
    }

    return first * second
}
// 3min