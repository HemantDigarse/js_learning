// +++++++++++++++++for of(Loop)++++++++++++++++++++++++++


const arr=["IronMan","Spiderman","CaptainAmerica","Hulk","Falcon"]
for (const superHereos of arr) {
    // console.log(superHereos);
    
}


const str="Spider Man"
for(const hero of str){
    if(hero==' '){
        continue
    }
    console.log(`Each char is ${hero}`);
    
}



//Maps

const map=new Map();
map.set("MadhyaPradesh","Bhopal")
map.set("MH","Mumbai")
map.set("Gujarat","GandhiNagar")
map.set("Goa","Panji")

console.log(map);//the value of map is unique


for (const [key,value] of map) {
    console.log(key,":-",value);
    
    

}


const ObjGames={
    game1:"NFS",
    game2:"ProjectIGI",
    game3:"ViceCity"

}

// Object is not iterable 
// for (const element of ObjGames) {
    
//     console.log(ObjGames);
// }



