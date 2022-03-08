"use strict";
//basic types
let id = 5;
let myStartup = "CodA";
let isLaunched = false;
let x = "Time to be seriously started";
// array types declaration 
let ids = [1, 5, 6, 7, 34, 68];
let arr = [1, 67, "typer", true];
ids.push(90);
x = true;
//tuple types declaration
let person = [1, "Mbk", true];
//tuple array declarations
let employee;
employee = [
    [1, "Mbk"],
    [8, "Yusuf"],
    [12, "Winnie"],
    [23, "JAmiu"]
];
//union types declaration
let uid;
uid = 22;
uid = "22";
// enum types declaration 
var direction1;
(function (direction1) {
    direction1[direction1["Up"] = 1] = "Up";
    direction1[direction1["Down"] = 2] = "Down";
    direction1[direction1["Left"] = 3] = "Left";
    direction1[direction1["Right"] = 4] = "Right";
})(direction1 || (direction1 = {}));
console.log(direction1.Up); // prints 1
console.log(direction1.Right); //prints 4
console.log(direction1.Left); // prints 3
var direction2;
(function (direction2) {
    direction2["Up"] = "Up";
    direction2["Down"] = "Down";
    direction2["Left"] = "Left";
    direction2["Right"] = "Right";
})(direction2 || (direction2 = {}));
console.log(direction2.Up); // prints string of Up
console.log(direction2.Right); // prints string of Right
console.log(direction2.Left); // prints string of Left
//Objects
const players = {
    id: 1,
    name: 'John',
    pin: true
};
const user = {
    id: 1,
    name: 'Munkamish',
    isLoggedIn: false,
};
//type Assertion
let cid = 1;
let customerId = cid;
//Cleaner types Assertion
let uids = true;
let usersIds = uids;
usersIds = 89;
// Functions Type Assertion 
