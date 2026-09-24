
// +++++++++++++for loop++++++++++++++++++++
for(let i=0;i<=10;i++){
    const element=i;
    if(element==5){
        console.log("Five is Best No.......");
        
    }
    console.log(element);
    
}


// for(let i=0;i<=10;i++){
//     console.log(`Outer Loop value is ${i}`);
    
//     for(let j=0;j<=10;j++){
//         // console.log(`Inner Loop value is ${j} and inner loop${i}`);
//     console.log(`${i} * ${j} = ${i*j}`);
    
// }
// }

const arr=["Flash","Batman","IronMan","SpiderMan"]
for(let i=0;i<arr.length;i++){
    const element=arr[i]
    console.log(element)
    
}


// break or continue


// for(let i=1;i<=20;i++){
    //     let element=i
    //     if(element==5){
        //         console.log(`Detected ${element}`)
        //         break
        
        //     }
        //     console.log(`Value of i is ${element}`)
        
        // }
        
        
        for(let i=1;i<=20;i++){
            let element=i
            if(element==5){
                console.log(`Detected ${element}`)
                continue
                
            }
            console.log(`Value of i is ${element}`)
            
        }





