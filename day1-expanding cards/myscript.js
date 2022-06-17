const allPanel=document.querySelectorAll(".panel")

allPanel.forEach(panel=>{
  panel.addEventListener("click",()=>{
    removeActive()
    panel.classList.add("active")
  })
})


function removeActive(){
  allPanel.forEach(panel=>{
    panel.classList.remove("active")
  })
}