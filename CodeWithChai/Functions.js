// Function

// const { use } = require("react");


function Greeting(){
    console.log("Hello World")
}
Greeting()



// function add(a,b){ // no need to assing data types in parameters
//     console.log(a+b);

// }
// const res=add(10,20)
// console.log(res);



function add(a,b){ // no need to assing data types in parameters
    return a+b;
    
}
const res=add(10,20)
console.log(res)






function isLoggedIn(username="HemantDigarse"){
    if(!username){
        console.log("Please enter a Username");
        return
        
    }
    else{

        return `${username} is just LoggedIn`
    }
}

const result=isLoggedIn("Hemant")
console.log(result);
