/* Types of Datatypes
1. Primitives
2. Non-Primitives

Primitives(Value Types)
7 Types of Primitives
String,Number,Boolean,Undefined,Null,Symbole,BigInt
*/
const num=10
let isLoggedIn=true
let username="Hemant"
let outsideTemp=null
let password;//undefined


let id=Symbol("20")
let anotherID=Symbol("20")

console.log(id===anotherID)

let bigIntNum= 1234567890123456789012345678901234567890n
console.log(typeof(bigIntNum))


/*

Non-Primitives(Reference Types)
1. Arrays
2. Objects
3. Functions


JavaScrit is a Dynamically Typed Language

*/



const fruits=["Apple","Mango","Banana"]
console.log(fruits);


// Objects in Js is collections of key value pairs
let itProfessional={
    // Value under CurlyBraces is Called Objects 
    "Name":"Hemant",
    "Age":21,
    "Skills":["HTML","CSS","JS","ReactJS"],
    isEmployed:true
}
console.log(itProfessional);
console.log(typeof itProfessional);



const myFunction=function GreetUser(){
    console.log("Good Morning");
    
}

console.log(typeof(myFunction));

