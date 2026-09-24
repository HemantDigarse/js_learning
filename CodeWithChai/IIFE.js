// Immediately Invoked Function Expressions create a private space to avoid global pollution


(function displayDBConnected(){
    console.log("DB Connect to My Website");
    
})();

((name)=>{
    console.log(`My name is ${name}`);
})("Hemant Digarse")