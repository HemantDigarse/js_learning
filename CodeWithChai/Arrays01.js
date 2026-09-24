//Arrays
// In JavaScript, an array is a dynamic object that can store elements of different data types, and elements are NOT guaranteed to be stored in contiguous memory locations.
const Arr=[1,2,3,4,5,6]
console.log(typeof Arr);

const fruits=["Apple","Mango","Banana","Orange"]
console.log(fruits[0]);

console.log(fruits.length);

//Arrays Methods 

console.log(Arr.push(7));
console.log(Arr.push(8))
console.log(Arr);

Arr.pop()
console.log(Arr);



let arr=[10,20,30,40,50,60,70,80]
// console.log(arr.shift())
// console.log(arr.unshift(2,4,6,8))
// console.log(arr);

console.log(arr.includes(50))
console.log(arr.indexOf(40)); //basically return the element index

// join is used to convert array to string with specified separator
let newArr=["My" ,"Name", "is","Hemant"]
let ArrayToString=newArr.join(" ");
console.log(ArrayToString)


//slice and splice

let sliceArr=arr.slice(0,3)
console.log(sliceArr);

// let spliceArr=arr.splice(2,4)
let spliceArr=arr.splice(2,4,100) //it effects the original Array

console.log(spliceArr);
console.log(arr);





