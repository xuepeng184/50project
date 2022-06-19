const but=document.querySelector(".btn")
const inp=document.querySelector(".input")
console.log(but,inp)
but.addEventListener("click",()=>{
  // console.log(123)
  inp.classList.toggle("active")
})