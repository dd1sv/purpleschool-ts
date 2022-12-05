// vmesto any use unknown
let input: unknown;

input =3;
input = ['sf', 'sdf']

// let ress: any = input;
function run(i: unknown){
    // if () - сужение типа
}

run(input);

// never - never uses
// никогда не вернётся
function genereateError(message: string): never {
    throw new Error(message)
}
