
one =() =>{
    console.log("One")
    two()
}

two = ()=>{
    console.log("Two");
    three()
    
}

three =()=>{
     console.log("Three");
     
}

one()
two()
three()