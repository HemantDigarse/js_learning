

// for passing mutliple value in function we use rest operator

function ShoppingCartAmounts(...num){ 
    return num
}


console.log(ShoppingCartAmounts(100,200,300,400,500))


function ShoppingCartAmounts1(value1,value2,...num){
    return num
}
console.log(ShoppingCartAmounts1(100,200,300,400,500))



// Working of functions with Objects

const Course={
    courseName:"Dsa",
    price:4999
}

function displayDetails(anyObj){
    return  `Course name is ${Course.courseName} and the price of this course is ${anyObj.price}`


}
// console.log(displayDetails(Course))



console.log(displayDetails({
    courseName:"Data Structure and Algorithm",
    price:4599
}))


//Array

const Arr=[100,200,300,400,500]

function returnThirdValue(arr){
    return `The Third element is : ${arr[2]}`;
}
console.log(returnThirdValue(Arr))

