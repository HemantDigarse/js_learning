


const user={
    userName:"Hemant Digarse",
    price:9999,
    welcome:function(){
        console.log(`${this.userName } ,Welcome to Website`);
        // this refers to current context
    }
    

}
// user.welcome();
// user.userName="DigarseHemant"
// user.welcome();

console.log(this);


// function display(){
//     let user="HemantDigarse"
//     console.log(this.user); //undefined 
// } this works only on object variable context
// display()


// const display= ()=>{
//     let user="Hemant"
//     console.log(this.user)
    

// }
// display()



// const addTwo=(num1, num2)=>{
//     return num1+num2; explicit return

// }
const addTwo=(num1, num2)=>(num1+num2) //implicit return


console.log(addTwo(45,69));


const display=()=>({"name":"Hemant"})
console.log(display())






