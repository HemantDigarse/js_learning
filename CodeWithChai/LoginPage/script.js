const frm=document.querySelector("form");

frm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(e.target);
    const name=document.querySelector("#fullName").value.trim();
    const email=document.querySelector("#email").value.trim();
    const phone=document.querySelector("#phoneNo").value.trim();
    const course=document.querySelector("#course").value;
    const res=document.querySelector("#result");
    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



    if(name==="" || !namePattern.test(name)){
        res.innerHTML="Fill valid Input";

    }
    if(email==="" ||!(emailPattern.test(email))){
        res.innerHTML="Email is Invalid";

    }
    if(isNaN(phone)||phone.length!==10 || phone===""){
        res.innerHTML="Phone Number is Invalid";

    }
    if(course===""){
        res.innerHTML="Course is Invalid";

    }

    else{
        // res.innerHTML='<h2>Submittion is Completed</h2>';
        res.innerHTML='<h1> Submittion is Completed</h2>'
    }


    
    
})