//Singleton Object
// Object.create

// Objects literals

const sym=Symbol("Key1")
const js_user={
    name:"Hemant",
    "full_name":"Hemant Digarse",
    age:22,
    [sym]: "mykey1",
    location:'Chhindwara',
    email:'hemantdigarse883@gmail.com',
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

//Accessing of Users


// console.log(js_user.name);
// console.log(js_user['name']);
// console.log(js_user.full_name);
// console.log(js_user[sym]);
// Object.freeze(js_user)
// js_user.email='hemantdigarse@example.com'
// console.log(js_user.email)



js_user.greeting=function(){
    console.log("hello Js");
}
console.log(js_user.greeting())

js_user.greetingTwo=function(){
    console.log(`Hello js user ${this.name}`);
}
console.log(js_user.greetingTwo())