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
function addNum(x, y) {
    return x + y;
}
console.log(addNum(6, 7));
//using Void and Union in Function
function log(message) {
    console.log(message);
}
log("Hello Mbk");
log(67);
const createAvatar = {
    id: 1,
    name: 'Olalekan',
    isLoggedIn: false,
};
const P1 = 1;
let p2 = "Alhamdulillah";
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(add(9, 8), sub(32, 8));
// classes in typescript 
class Person {
    constructor(id, name) {
        console.log(123);
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
    checkId() {
        return `${this.id} is Verified`;
    }
}
const Mbk = new Person(12, 'Mustapha');
const Shattry = new Person(16, 'Shattry');
console.log(Mbk, Shattry);
console.log(Shattry.register()); // will call the register function and pick its name
console.log(Mbk.checkId());
class Users {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
    checkId() {
        return `${this.id} is Verified`;
    }
}
//extending a subclass with extends keyword
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const newEmployee = new Employee(3, 'Jalasem', "Senior Developer");
console.log(newEmployee);
console.log(newEmployee.register());
//using Generics to create reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5, 6, 7]);
let strArray = getArray(["Saka", "Martinelli", 'ESR']);
