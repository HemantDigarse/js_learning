// this keyword-> tells about the current object or context in which the code is being executed. It refers to the object that is currently executing the code, and its value can change depending on how a function is called or where it is used.
//  In JavaScript, the value of this is determined by the context in which a function is invoked, and it can refer to different objects based on whether the function is called as a method of an object, as a standalone function, or within an arrow function.



const user={
    userName:"Hemant Digarse",
    price:9999,
    welcomeMessage:function(){
        console.log(`${this.userName } ,Welcome to Website`);
        console.log(this);
        // this refers to current context
    }   
}
// user.welcomeMessage();


// user.userName="Nishtha Raut"
// user.welcomeMessage();

console.log(this);

/*
function display(){
    let user="HemantDigarse"
    console.log(this.user); //undefined 
} // this works only on object variable context
display()

*/


// const display= function (){
//     let user="hemant";
//     console.log(this.user);
// }
// display()



const display=()=>{
    let user="Hemant"
    console.log(this)  

}
display()


// const addTwo=(num1,num2)=>(num1+num2);  //implicit return
const addTwo=(num1,num2)=>({user_name:"Hemant"});
console.log(addTwo(45,45));


const arr=[1,2,3,4,5,6,7,8,9,10];
const findSecondValue=(arr)=>(arr[1])
console.log(findSecondValue(arr));