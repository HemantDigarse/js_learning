

setInterval(()=>{
  const date=new Date();
  console.log(date);
  const input=document.querySelector("#time")
  input.value=date.toLocaleTimeString()
},1000)