//Primitive -(call by Value)-->Exact value is not used copy of address is used

//07 Types-String,Number ,Boolean.null ,undefined, Symbol, BigInt

//Dynamically typed
const score= 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null//Empty
let userEmail;//Undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);//false as Symbol makes Every value Unique

const bigNUmber = 238594378342875490n

//Non Primitive -Call by Reference(Exact address is used)

//Array, Objects ,Functions

const heros = ["Shaktiman","Naagraj", "Doga"];
let myObj = {
    name: "Avnish",
    age: 19
}
//Functions can be declared as variables in js
const myFunction = function(){
    console.log("Hello");
}
console.log(typeof bigNUmber);//bigint
console.log(typeof id);//symbol
console.log(typeof myFunction);//function
console.log(typeof myObj);//object
