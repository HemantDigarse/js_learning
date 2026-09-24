const coding=['Dsa','c++','java','ruby','Javascript']
// // coding.forEach( function(item){console.log(item)})
// coding.forEach((item)=>{
// console.log(item);

// })


// function printMe(item){
//     console.log(item)

// }

// coding.forEach(printMe)//reference dena hain na kii function call krna hain



// coding.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
    
// })



const mycoding=[
    {
    lang:"javascript",
    priceofCourse:4999,
    timeduration:4
   },
    {
    lang:"DSA in Java",
    priceofCourse:3999,
    timeduration:5
   },
    {
    lang:"SQL and MongoDB",
    priceofCourse:7999,
    timeduration:7
   }

]

mycoding.forEach((item)=>{
  console.log(`Language: ${item.lang}, Price: ${item.priceofCourse},Time Duration: ${item.timeduration}`);

  
})
// console.log(mycoding);






