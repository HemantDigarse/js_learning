// Functions -> Functions are blocks of code that can be defined once and executed whenever needed. They help in organizing code, making it reusable, and improving readability. 
// In JavaScript, functions can be defined using the `function` keyword or as arrow functions.


// Function Declaration
function greet(){
    console.log("Hello, welcome to the world of functions!");
}
greet()



// Function with Parameters
/*
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
addTwoNumbers(15,10);
*/

/*
function addTwoNumbers(num1,num2){
    // let result=num1+num2;
    // return result;
    return num1+num2;
}
let result=addTwoNumbers(15,10);
console.log(result);
*/


function userJustLoggedIn(name){
    if(name==undefined){
        console.log("Please provide a name");
        return;
    }
    return `${name} user just logged in`;
}
// let res=userJustLoggedIn("Hemant Digarse");
let res=userJustLoggedIn();
console.log(res);



// Rest operator -> The rest operator is used to collect multiple elements and condense them into a single array.
//  It is represented by three dots (...) followed by a variable name. 
// It allows you to handle an indefinite number of arguments in a function.


function addToShoppingCart(...items){
    return items;
}
console.log(addToShoppingCart(50,60,8965,20357));


// Using objects as parameters in functions allows you to pass structured data into a function, making it easier to manage and access related information. 
// This approach is particularly useful when dealing with multiple related values, as it enhances code readability and maintainability.


let student={
    name:"Hemant Digarse",
    marks:90
}
let students='john Doe';
function displayStudentInfo(student){
    if(typeof student === 'object'){
    console.log(`Student name is ${student.name} and obtained ${student.marks} marks.`);
    }
    else{
        console.log("Please provide a valid student object");
    }
}
displayStudentInfo(students);



