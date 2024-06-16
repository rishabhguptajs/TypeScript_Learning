"use strict";
let stringArr = ['one', 'hey', 'rishabh'];
let guitars = ['strat', 'les paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'what';
stringArr.push('hehe');
guitars[0] = 123;
guitars.unshift('wicked');
mixedData[0] = false;
let test = [];
let bands = [];
bands.push('Virat Kohli');
let myTuple = ["Rishabh", 19, true];
let mixed = ['Rishabh', 1, false];
mixed = myTuple;
myTuple[1] = 123;
let myObj;
myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: 'Rishabh',
    prop2: true
};
exampleObj.prop1 = 'RG';
let evh = {
    name: 'Rishabh',
    active: true,
    albums: [2024, 'DEMNI']
};
let AS = {
    name: 'Arijit',
    active: true,
    albums: ['Rockstart', 'Baaghi', 'Channa Mereya']
};
const greet = (guitarist) => {
    return `Hello ${guitarist.name.toUpperCase()}`;
};
console.log(greet(AS));
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
console.log(Grade.B);
