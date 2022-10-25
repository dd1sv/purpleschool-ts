// arrays
const skills: string[] = ['Dev', 'DevOps']
const skillsEx: Array<string> = ['Dev', 'DevOps']
for(const skill of skills) {
    console.log(skill)
}
// Tuples - кортежи
const skillsTwo: [string, number] = ['Dev', 1]

// readonly
const skillsThree: readonly [number, string] = [1, 'Dev']

// enums

enum StatusCode {
    SUCCESS,
    IN_PROCESS,
    FALIED
}
const res = {
    message: 'Платёж ок',
    statusCode: StatusCode.SUCCESS
}
if (res.statusCode === StatusCode.SUCCESS){
    console.log('good')
}

