


const date=new Date();
console.log(date)
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toLocaleString())

console.log(typeof date)


// const newDate= new Date(2026,0,25) // Month is 0 based index
const newDate= new Date(2026,0,25,5,3) // Month is 0 based index
console.log(newDate.toLocaleString())


let newDate1=new Date("09-01-2026")
console.log(newDate1.toLocaleString());

let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(newDate1.getTime())

console.log(Date.now()/1000) //in seconds
console.log(Math.floor(Date.now()/1000)) //in seconds



let newDaTe=new Date()
console.log(newDaTe);
console.log(newDaTe.toString());

console.log(newDaTe.getDate());
console.log(newDaTe.getMonth()+1);
console.log(newDaTe.getDay());

newDaTe.toLocaleString("default",{
    weekday:"long",
    day:"2-digit"
})



 