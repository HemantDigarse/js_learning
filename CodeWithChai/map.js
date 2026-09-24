const num=[1,2,3,4,5,6,7,8,9,10]
// const newnum=num.map((num)=>num+10)
// const newnum=num.map((num)=>{
//     return num+10
// })
// console.log(newnum)

// +++++++++++++++++++++++++++++++++++Chaining+++++++++++++++++++++++++++++++++++


const chain=num
              .map((n)=>n*10)
              .map((n)=>n+1)
              .filter((n)=>n>=40)
console.log(chain)

