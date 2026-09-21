
// Conditional Statatements are used to perform different actions based on different conditions. In JavaScript, we have the following conditional statements:
// 1. if statement
// 2.else statement
// 3. else if statement
// 4. switch statement


let age=18;
if(age>=18){
    let name='Nishtha Raut';
    console.log(`${name} you are ready for Voting in ELection`);
}

// Even Odd Problem
let num=15;
if(num%2==0){
    console.log(`${num} is Even Number`);
}
else{
    console.log(`${num} is Odd Number`);
}


//grade calculation
let marks=75;
if(marks>=90 && marks<=100){
    console.log("A+ Grade");
}
else if(marks>=80 && marks<90){
    console.log("A Grade");
}
else if(marks>=70 && marks<80){
    console.log("B Grade");
}
else if(marks>=60 && marks<70){
    console.log("C Grade");
}
else if(marks>=50 && marks<60){
    console.log("D Grade");
}
else{
    console.log("Fail");
}   


// Leap Year Problem
let year=2024;
if((year%4==0 && year%100!=0) || (year%400==0)){
    console.log(`${year} is a Leap Year`);
}
else{
    console.log(`${year} is Not a Leap Year`);
}
// switch statement is used to perform different actions based on different conditions. In JavaScript, we have the following conditional statements:

let day=2;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;                 
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid Day");
} 