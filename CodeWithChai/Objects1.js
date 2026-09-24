/* We can Create Objects in JavaScript with the help of Two Ways
1. Singleton
2. Object Literals
*/

const sym=Symbol("id")
const emp={
    "Name":"Hemant Digarse",
    Age:21,
    [sym]:"myID01",
    email:"hemantdigarse882@gmail.com",
    Skills:["HTML","CSS","JS","ReactJS"],
    isEmployed:true,
    isLoggedIn:false
}

// Accessing Objects
// console.log(emp["email"])
// console.log(emp.email)
// console.log(emp[sym])
// console.log(typeof emp[sym])


// emp.email="hemantdigarse12307216@gmail.com"

// Object.freeze(emp) // it will not allow to change,delete or add new properties to the object
// emp.email="hemantdigarse123@gmail.com"

// console.log(emp);

// Adding Function in Object
emp.Greeting=function(){
    console.log("Hello Everyone");
}

console.log(emp.Greeting());

emp.Greeting2=function(){
    console.log(`My name is ${this.Name}`)
    
}
console.log(emp.Greeting2());

