"use strict";
// Type Aliases
// Literal types
let myName;
let username;
username = "Virat";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Rishabh says Hello!");
logMsg(add(2, 4));
logMsg("Add function done!");
let subtract = function (c, d) {
    return c - d;
};
logMsg(subtract(3, 2 / 0));
let multiply = (c, d) => {
    return c * d;
};
logMsg(multiply(3, 12));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
    return i;
};
// custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
// use of never type
const numberOrString = (value) => {
    if (typeof value == 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
