// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type Guitarist = {
  name: string
  active?: boolean
  albums: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let myName: "Rishabh"

let username: "Rishabh" | "Virat" | "Gill"

username = "Virat"

// functions

const add = (a: number, b: number) => {
  return a + b
}

const logMsg = (message: any): void => {
  console.log(message)
}

logMsg("Rishabh says Hello!")
logMsg(add(2, 4))
logMsg("Add function done!")

let subtract = function (c: number, d: number): number {
  return c - d
}

logMsg(subtract(3, 2/0))

// type mathFunction = (a: number, b: number) => number
interface mathFunction{ 
    (a: number, b: number): number 
}

let multiply: mathFunction = (c, d) => {
    return c * d;
}

logMsg(multiply(3, 12))

const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

const infinite = () => {
    let i: number = 1;
    while(true) {
        i++;
        if(i > 100) break;
    }

    return i;
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}

// use of never type
const numberOrString = (value: number | string): string => {
    if(typeof value == 'string') return 'string';
    if(isNumber(value)) return 'number';

    return createError('This should never happen!')
}
