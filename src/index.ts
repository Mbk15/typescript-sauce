//basic types
let id :number = 5
let myStartup :string = "CodA"
let isLaunched :boolean = false
let x:any = "Time to be seriously started"


// array types declaration 

let ids :number[] = [1, 5, 6 ,7 , 34 , 68 ]
let arr : any[] = [1, 67, "typer" , true]

ids.push(90)
x = true

//tuple types declaration

let person :[number , string , boolean] = [1, "Mbk" , true]

//tuple array declarations

let employee :[number , string ][]

employee =[
    [1, "Mbk"],
    [8, "Yusuf"],
    [12, "Winnie"],
    [23, "JAmiu"]
]

//union types declaration
let uid : string | number

uid = 22
uid = "22"

// enum types declaration 

enum direction1 {
    Up =1,
    Down,
    Left,
    Right,
}

console.log(direction1.Up) // prints 1
console.log(direction1.Right) //prints 4
console.log(direction1.Left) // prints 3


enum direction2 {
    Up ='Up',
    Down ='Down',
    Left ='Left',
    Right ='Right'
}

console.log(direction2.Up) // prints string of Up
console.log(direction2.Right)  // prints string of Right
console.log(direction2.Left)  // prints string of Left


//Objects

const players :{
    id: number,
    name: string
    pin:boolean
} = {
    id: 1,
    name: 'John',
    pin : true
}

//clean obejct types declaration

type User ={
    id: number,
    name: string,
    isLoggedIn: boolean,
}

const user:User = {
id: 1,
name: 'Munkamish',
isLoggedIn: false,
}

//type Assertion

let cid : any = 1

let customerId = <number>cid

//Cleaner types Assertion

let uids : any = true

let usersIds = uids as number

usersIds = 89

// Functions Type Assertion 

function addNum(x:number , y:number):number{
return x + y
}
console.log(addNum(6,7))

//using Void and Union in Function

function log(message:string |number) :void{
    console.log(message)
}
log("Hello Mbk")
log(67)

// using interfaces which is recommended for Objects

interface UserInterface {
   readonly id: number, // setting readonly property to id to avoid mutation
    name: string,
    isLoggedIn: boolean,
    age? :number, //optional Chaining for not too important variables
}

const createAvatar:UserInterface = {
id: 1,
name: 'Olalekan',
isLoggedIn: false,

}

//using Type for params and Unnions

type point = number | string

const P1: point = 1
let p2: point = "Alhamdulillah"

// interface for functions

interface MathFunc{
    (x: number, y: number):number;
}

const add: MathFunc = (x: number, y: number):number => x+y
const sub: MathFunc = (x: number, y: number):number => x-y

console.log(add(9,8), sub(32,8))

// classes in typescript 

class Person{
    private id: number; // making private variables
    protected name: string; // seting variable to protected

    constructor(id: number, name: string){
        console.log(123)
        this.id =id;
        this.name = name;
    }
    register(){ //function to demostrate how protected keyword is used as a local scope
        return `${this.name} is now registered`
    }
    checkId(){
     return `${this.id} is Verified`
    }
}

const Mbk = new Person(12, 'Mustapha')
const Shattry = new Person(16, 'Shattry')

console.log(Mbk,Shattry)

console.log(Shattry.register()) // will call the register function and pick its name

console.log(Mbk.checkId())


// Implementing interface with classes

interface PersonInterface {
     id: number, // setting readonly property to id to avoid mutation
     name: string,
     register():string
     checkId():string
 }

 class Users implements PersonInterface { //using implements to add interface to classes
    id: number;  
    name: string;

    constructor(id: number, name: string){
        this.id =id;
        this.name = name;
    }
    register(){ //function to demostrate how protected keyword is used as a local scope
        return `${this.name} is now registered`
    }
    checkId(){
     return `${this.id} is Verified`
    }
}

//extending a subclass with extends keyword

class Employee extends  Person{
    position: string;

    constructor(id:number, name: string , position: string){
        super(id, name)
        this.position =position;
        
    }
}

const newEmployee = new Employee(3, 'Jalasem' , "Senior Developer")

console.log(newEmployee)
console.log(newEmployee.register())


//using Generics to create reusable components

function getArray<T>(items:T[]):T[]{  // using the fragment type to declare reusable type based on call
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5,6,7])

let strArray = getArray<string>(["Saka" , "Martinelli" ,'ESR'])
