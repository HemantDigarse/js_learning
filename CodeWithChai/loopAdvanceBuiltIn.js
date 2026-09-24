// const coding=["js","ruby","java","python","cpp"]
// const value=coding.forEach((item)=>{
//    console.log(item);
   
// })

// console.log(value)
//  +++++++++++++++++++++++++++++++++++++Filter+++++++++++++++++++++++++++++++++++++

const myNums=[1,2,3,4,5,6,7,8,9]
// const newNums=myNums.filter((num)=>num>4)//value return
// const newValues=myNums.filter((num)=>{
//     return num>4;
// })

// console.log(newValues)


// using forEach Loop


// let newMyNums=[]

// myNums.forEach((value)=>{
//     if(value>4){

//         newMyNums.push(value)
//     }
// })

// console.log(newMyNums);



const courses=[{
    course:"DSA",courseFee:4500,timeduration:4
},
{
    course:"DSA",courseFee:3900,timeduration:10
},
{
    course:"Java",courseFee:4999,timeduration:5
},
{
    course:"C++",courseFee:3999,timeduration:3
},
{
    course:"SQL",courseFee:1999,timeduration:2
},
{
    course:"ML",courseFee:8999,timeduration:5
}
]
let userBooks=courses.filter((bk)=>bk.course==="DSA")
userBooks=courses.filter((bk)=>{
    return bk.courseFee<4500&& bk.timeduration>=3
})
console.log(userBooks);






