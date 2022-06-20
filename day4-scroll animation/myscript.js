const box=document.querySelectorAll(".box")

//开时的时候执行一遍
inOrOut()
//window里的函数不能加()
window.addEventListener("scroll",inOrOut)

function inOrOut(){
  //给视窗设定一个临界值，一个界限
  const boundary=window.innerHeight/8*6;
  console.log(boundary)
  box.forEach((panel)=>{
    //获得当前盒子离可视窗口顶部的距离
    const boxTop=panel.getBoundingClientRect().top
    if(boxTop<boundary){
      panel.classList.add("active")
    }
    else{
      panel.classList.remove("active")
    }
  })
}