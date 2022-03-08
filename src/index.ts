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

interface createInterface {
    id: number,
    name: string,
    isLoggedIn: boolean,
    age? :number, //optional Chaining for not too important variables
}

const createAvatar:createInterface = {
id: 1,
name: 'Olalekan',
isLoggedIn: false,

}

//using Type for params and Unnions

type point = number | string

const P1: point = 1
let p2: point = "Alhamdulillah"