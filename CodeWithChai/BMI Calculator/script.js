const form=document.querySelector("form");
console.log(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e);
    console.log(e.target);

    const height=parseInt(document.querySelector("#height").value);
    const weight=parseInt(document.querySelector("#weight").value);
    const result=document.querySelector(".result");
    const category=document.querySelector('.category');

    if(height==' ' || height<0 || isNaN(height)){
        result.innerHTML="Invalid Input receive in Height";
        
    }

    else if(weight==' ' || weight<0 || isNaN(weight)){
       result.innerHTML="Invalid Input receive in weight";
        
    }
    else{
        const res=(weight/(height*height))*703;
        result.innerHTML=res;
        if(res<=18.5){
            category.innerHTML="Underweight";
        }
        else if(res>18.5 && res<=24.9){
            category.innerHTML="Normal Weight";
        }
        else if(res>25 && res<=29.9){
            category.innerHTML="Overweight"
        }
        else{
            category.innerHTML="obese"
        }


    }
    


})
