
let a=100 //global scope
if(true){
    let a=10 //block scope
    const b=20
    var c=30;
    console.log("Inner a: ", a)
}

console.log("Outer a: ",a)
// console.log(b)
console.log(c)
