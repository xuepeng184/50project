

const buttons= document.querySelectorAll(".faq-toggle")

// console.log(buttons[0])\

buttons.forEach((button)=>{
  button.addEventListener("click",()=>{

   button.parentNode.classList.toggle("active")
  })
})


