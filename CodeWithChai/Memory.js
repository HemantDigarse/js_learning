
/*
Two Types of Memory in JavaScript
1. Stack Memory
2. Heap Memory

Primitives(Stack Memory is Used for Primitives)(variable ka copy milti hain)
Non-Primitives(Heap Memory is Used for Non-Primitives)(variable ka ref milti hain)


*/


let name="Hemant Digarse"
let anotherName=name
anotherName="Hemant"
console.log(name)
console.log(anotherName)

// In Primitives Data Types Value is Stored in Stack Memory If i Will Create another variable and Assign the First Variable to Second Variable Then a Copy of First Variable is Stored in Second Variable So When I Change the Value of Second Variable It Will Not Affect the First Variable Because Both Variables are Stored in Different Memory Locations in Stack Memory.


let employee={
    "Name":"Hemant Digarse",
    "Age":21,
    "email":"hemantdigarse@gmail.com",
    "Company":"Microsoft" ,
    "Work of Experience":1
}


let anotherEmployee=employee
anotherEmployee.email="hemantdigarse12456@gmail.com"
console.log(employee.email)
console.log(anotherEmployee.email)

// In Non-Primitives Data Types Value is Stored in Heap Memory If i Will Create another variable and Assign the First Variable to Second Variable Then a Reference of First Variable is Stored in Second Variable So When I Change the Value of Second Variable It Will Affect the First Variable Because Both Variables are Stored in Same Memory Location in Heap Memory.