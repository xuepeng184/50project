const bg=document.querySelector(".bg");
const text=document.querySelector(".loading-text")

let a=0;
let time=setInterval(active,30)

function active(){
  a++
  if(a>99){
    clearInterval(time)
  }
  //图片的背景模糊度，从100到0
  let blur=100-a
  //文本的透明度，从1到0
  let opa=(a/100).toFixed(2)
  bg.style.filter=`blur(${blur}px)`;
  text.style.opacity=1-opa;
}