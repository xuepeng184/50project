const prevBtn=document.querySelector("#prev")
const nextBtn=document.querySelector("#next")
const progress=document.querySelector(".progress")
const circles=document.querySelectorAll(".circle")

let currentIndex=1
//给perv按钮绑定事件
prevBtn.addEventListener("click",()=>{
  currentIndex--;
  if(currentIndex<=1){
    currentIndex=1
  }
  update()
})

//给next按钮绑定事件
nextBtn.addEventListener("click",()=>{
  currentIndex++;
  if(currentIndex>=4){
    currentIndex=4
  }
  update()
})

//更新进度条的函数
function update(){
  circles.forEach((circle,index)=>{
    // console.log(circle,index)
    if(index<currentIndex){
      circle.classList.add("active")
    }
    else{
      circle.classList.remove("active")
    }
  })
  //判断按钮是否可用
  if(currentIndex==1){
    prevBtn.disabled=true
  }
  else{
    prevBtn.disabled=false
  }
  if(currentIndex==4){
    nextBtn.disabled=true
  }
  else{
    nextBtn.disabled=false
  }

  //更改进度条
  let prolength=document.querySelectorAll(".active")
  console.log(prolength.length)
  console.log(circles.length)
  progress.style.width=(prolength.length-1)/(circles.length-1)*100+"%"
}


