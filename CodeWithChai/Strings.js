// String in JavaScript

const name="Hemant Digarse"
const greeting="Good Morning"
const add=name+" "+greeting
// console.log(add);

console.log(`My name is ${name} and my greeting is ${greeting}`)


const str1="Lovely Professional University"
const str2=new String("Phagwara,Punjab") // String Object
console.log(typeof(str1))
console.log(typeof(str2))


// String Methods

// Accessing Characters in a String
console.log(str2[0])

// console.log(str2.prototype__)

console.log(str2.length)

console.log(str1.toUpperCase()) 
console.log(str1)

console.log(str2.toLowerCase());
console.log(str2)


console.log(str1.charAt(5))

console.log(str1.indexOf("P"))
console.log(str1.concat(" "+str2))

// const subString=str1.substring(8); // from index 8 to end of string
const subString=str1.substring(0,8); 
console.log(subString)

console.log(str1.length)


const Slicing=str1.slice(-30,30) //-ve index se end se count krta hain

const Slicingstr1=str1.slice(8)
console.log(Slicing)

console.log(str1.slice(0,8))
console.log(str1.search("Professional")) //index return 


console.log(str1.match(str2))



//Trim basically removes the spaces from starting and ending of the string
const stringWithSpaces="   Hemant        "
console.log(stringWithSpaces);
console.log(stringWithSpaces.trim())


const url="hemantdigarse882@gmail.com"
console.log(url.replace("882","12307216"))

console.log(url.includes("hemant")) //true or false

// Split in String

const poem="Roses are red Violets are blue Sugar is sweet And so are you"
const poemSplit=poem.split(" ")
console.log(poemSplit)
console.log(typeof(poemSplit))