const open=document.querySelector("#open");
const close =document.querySelector("#close")
const document1=document.querySelector(".container")

open.addEventListener("click",()=>{
  document1.classList.add("showNav")
})

close.addEventListener("click",()=>{
  document1.classList.remove("showNav")
})