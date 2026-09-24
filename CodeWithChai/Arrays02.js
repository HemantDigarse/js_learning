const marvel=["Ironman","Thor","Hulk","Captain America"]
const dc=["Batman","Superman","Flash","Wonder"]
const cartoon=["Tom","Jerry","Micky","Donald"]
// marvel.push(dc)
// console.log(marvel)


const allHeroes=marvel.concat(dc)
console.log(allHeroes);


// Mutliple Arrays Concatenation
const allnewHeroes=[...marvel,...dc,...cartoon]
console.log(allnewHeroes)


const arrAys=[1,2,[3,4,5,4],[4,[45,52,64,78]],56]
console.log(arrAys.flat(Infinity));// Infinity means how deep you want to go and flatten the array




console.log(Array.isArray("Hemant"))
console.log(Array.from("Hemant"));
console.log(Array.from({name:"Hemant"})); //interesting case



let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
