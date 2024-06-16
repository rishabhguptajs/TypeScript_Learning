let stringArr = ['one', 'hey', 'rishabh']

let guitars = ['strat', 'les paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'what'
stringArr.push('hehe')

guitars[0] = 123
guitars.unshift('wicked')

mixedData[0] = false

let test = []
let bands: string[] = []
bands.push('Virat Kohli')

let myTuple: [string, number, boolean] = ["Rishabh", 19, true];

let mixed = ['Rishabh', 1, false]

mixed = myTuple

myTuple[1] = 123

let myObj: object

myObj = []

console.log(typeof myObj)

const exampleObj = {
    prop1: 'Rishabh',
    prop2: true
}

exampleObj.prop1 = 'RG'

interface Guitarist {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Rishabh',
    active: true,
    albums: [2024, 'DEMNI']
}

let AS: Guitarist = {
    name: 'Arijit',
    active: true,
    albums: ['Rockstart', 'Baaghi', 'Channa Mereya']
}

const greet = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}`
}

console.log(greet(AS))

// enums

enum Grade {
    U,
    D,
    C,
    B,
    A,
}

console.log(Grade.A)
console.log(Grade.B)