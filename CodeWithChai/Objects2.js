

// const TinderUser=new Object();(Singleton Objects)
const TinderUser={}//Object literals
TinderUser.id=12307216
TinderUser.name="Hemant Digarse"   
TinderUser.email="hemantdigarse882@gmail.com"
console.log(TinderUser);


const student={
    regNo:12307216,
    name:{
        fullname:{
            firstName:"Hemant",
            lastName:"Digarse"
        }
    }

}

console.log(student.name.fullname.firstName)


const alpha1={
    1:"a",
    2:"b"
}


const alpha2={
    3:"c",
    4:"d"
}

// const alpha3={alpha1,alpha2}
// const alpha3=Object.assign({},alpha1,alpha2)
const alpha3={...alpha1,...alpha2} //Using Spread Operator

console.log(alpha3)


const user=[
    {

        id:1,
        email:"hemantdigarse882@gmail.com"
    },
    {
    },
    {

    }

]

console.log(user[0].email);



console.log(Object.keys(TinderUser)) //return array of keys
console.log(Object.values(TinderUser)) //return array of keys

console.log(Object.entries(TinderUser));

console.log(TinderUser.hasOwnProperty("id"))
