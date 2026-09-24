

// let userEmail="hemantdigarse882@gmail.com"


// let userEmail=""
let userEmail=[]
if(userEmail){
    console.log("I got user's Email");
    
}
else{
    
    console.log("I did'nt got user's Email");
}

// Falsy Values->false,"",0,-0,BigInt 0n,null,undefined,nan
//Truthy values->"0",[],'false'," ",function(){},


if(userEmail.length===0){
    console.log("Email is empty");
    
}

const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
    
}

// NUllish Coalescing Operator(??):null or undefined

let val1;
// val1=5 ?? 10

// val1=null ?? 10
val1=undefined??25

console.log(val1);



// Ternaryy Operator
// condition?true:false

let priceOfCloth=1500

let res=(priceOfCloth>2000)? "Price of cloths greater than 2000":"Price of cloths is not greater than 2000"
console.log(res);




