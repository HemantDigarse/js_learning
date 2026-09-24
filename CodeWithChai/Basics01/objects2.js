//object creation using constructor
// const tinderUser=new Object()

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="Hemant"
tinderUser.isLoggedIn=false
// console.log(tinderUser)


const regularUser={
    email:'hemant@gmail.com',
    full_name:{
        userfull_name:{
            first_name:"Hemant",
            last_name:"Digarse"
        }
    }
}


console.log(regularUser.full_name.userfull_name.first_name)

const obj1={
    1:"a",
    2:"b",
    3:"c"
}
const obj2={
    4:"d",
    5:"e",
    6:"f"
}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2} //using spread operator
console.log(obj3)



// database response
const users=[
    {
        id:1,
        email:'hemantdigarse882@gmail.com'
    },
    {
        id:2,
        email:'nishtharaut@gmail.com'
    },
    {
        id:3,
        email:'yashmishra31@gmail.com'
    }
]

// csole.log(users[1])
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tionnderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));




// Objects destructuring
const course={
    course_name:'js in Hindi',
    price:999,
    course_Instructor:'Hemant'
}
// console.log(course);


// course.course_Instructor

const{course_Instructor:instructor,price:course_price}=course
console.log(instructor);
console.log(course_price);


// response from api 
// {
//     "name":"Hemant",
//     "course_name":"js learning in Hindi",
//     "price":"free"
// }