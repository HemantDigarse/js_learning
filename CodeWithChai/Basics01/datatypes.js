
/*
Datatypes are the different types of values that can be stored and manipulated in a programming language. 
In JavaScript, there are several basic data types, including:

A datatype tells Javascript what kind of value a variable holds and what operations can be performed on that value. Here are the main data types in JavaScript:

Two types of Datatypes
1. Primitive Data Types(Immutable)
2. Non-Primitive Data Types(Mutable)


Primitives(Value Types)
7 Types of Primitives
String,Number,Boolean,Undefined,Null,Symbole,BigInt
*/



let name="Hemant Digarse";
let age=23;
let isLoggedIn=true;
let password;//undefined

let symbol1=Symbol("20")
let symbol2=Symbol("20")

console.log(symbol1===symbol2)
// Template literal
console.log(`My name is ${name} and I am ${age} years old`);

// JavaScript's Number type represents both integers and floating-point numbers.
let x=23;
let y=-23;
console.log(typeof(x));
console.log(typeof(y));

//Undefined declared but not assigned any value
let hello;
console.log(typeof(hello));

// null->represents an intentional absence of a value.

let outsideTemp=null;
console.log(typeof(outsideTemp));


/*

Non-Primitives(Reference Types)
1. Arrays
2. Objects
3. Functions


JavaScrit is a Dynamically Typed Language

*/


const fruits=["Apple","Mango","Banana"]
console.log(fruits);
console.log(typeof(fruits));


// Objects in Js is collections of key value pairs
const student={
    name:"Hemant",
    age:22,
    skills:["HTML","CSS","JS","ReactJS"],
    isEmployed:true
}
console.log(student);
console.log(typeof student);

