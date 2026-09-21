/*
Loop
A loop is used when we want to execute the same block of code multiple times.
Print->1 to 10 values
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
*/


// for(let i=1;i<=10;i++){
//     console.log(i);
// }


// let j=1;
// while(j<=10){
//     console.log(j);
//     j++;
// }

//Array Iteration

let temp=[10,20,30,40,50,60,70,80,90,100]
for(let i=0;i<temp.length;i++){
    console.log(temp[i]);
}



let name="Hemant Digarse";
for(let i=0;i<name.length;i++){
    console.log(name[i]);
}



// for of loop is used to iterate over the values of an iterable object, such as an array or a string. It allows you to access each element in the iterable without needing to use an index.
let superheroes=["Flash","Batman","IronMan","SpiderMan"]
for(let hero of superheroes){
    console.log(hero);
}


//for in loop is used to iterate over the properties of an object. It allows you to access each property key in the object without needing to use an index.

let student={
    name:"Hemant Digarse",
    age:23,
    city:"Chhindwara",
    pincode:480331
}

for(let key in student){
    console.log(`${key} : ${student[key]}`);
    
}



//Pratice Problem

// 1 to 100 even Number print

for(let i=1;i<=100;i++){
    if(i%2==0 && i%3==0){
        console.log(i);
    }
}


// rev number

let n=1234;
let rev=0;
while(n>0){
    let rem=n%10;
    rev=rev*10+rem;
    n=Math.floor(n/10);
}

console.log("Reverse number is: " +rev);