

function one(){
    const username="Hemant"
    function two(){
        const website="Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()

if(true){
    const name="Hemant"
    if(name==="Hemant"){
        const surname="Digarse"
        console.log(name+" "+surname);
        
    } 
    // console.log(surname) //scope exceed
}
// console.log(name) //scope exceed




//++++++++++++++++++++++++++interesting+++++++++++++++++

console.log(10)
function addOne(num){
    return num+1
}




//Another way of declaring Function
// console.log(addTwo(20))
const addTwo=function(num)
{
    return num+2
}
console.log(addTwo(20))


