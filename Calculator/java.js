let display=document.getElementById("input");
let num=document.querySelectorAll('button');
console.log(num);
num.forEach(element=>{
    element.addEventListener("click",(e)=>{
       if(e.target.textContent==='C')
       {
        display.innerHTML="";
       }else if(e.target.textContent==='<')
       {
        display.innerHTML=display.innerHTML.slice(0,-1);
       }
       else if(e.target.textContent==='=')
       display.innerHTML=eval(display.innerHTML);
       else 
       display.innerHTML+=e.target.textContent;
    })
})
