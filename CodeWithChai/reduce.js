
// +++++++++++++++++++++++++reduce++++++++++++++++++++++++
const num=[1,2,3,4,5,6]
const initialValue=0
// const reducedTotalValue=num.reduce(function(acc,currValue){
//     console.log(`${acc},${currValue}`)
//     return acc+currValue;
// },initialValue)
const reducedTotalValue=num.reduce((acc,currValue)=>acc+currValue,0)
console.log(reducedTotalValue);


const  shoppingCart=[{
    courseName:"DSA in Java",fees:6999,duration:4},
    {courseName:" DSA in C++",fees:4999,duration:3},
    {courseName:"DSA in Python",fees:2999,duration:3},
    {courseName:"Data Science",fees:2999,duration:5}

]

const TotalFees=shoppingCart.reduce((acc,item)=>acc+item.fees,0)

console.log(TotalFees);
