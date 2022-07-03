
const ta=document.querySelector("#textarea")
const tagFather=document.querySelector("#tags")
ta.focus()

//监听keyupp事件，创建tag
ta.addEventListener("keyup",(event)=>{
  buildTag(event.target.value)
  //判断如果为enter键则开始执行选择函数
  if(event.key=="Enter"){
    event.target.value=''
    beginChoice()
  }
})

// 创建每一个选择
function buildTag(input){
  const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag=>tag.trim())
  tagFather.innerHTML = ''
  tags.forEach((tag)=>{
    const tagsChild=document.createElement("span")
    tagsChild.classList.add("tag")
    tagsChild.innerHTML=tag
    tagFather.appendChild(tagsChild)
  })
}


function beginChoice(){
  let interVal=setInterval(()=>{
    let choiceTag=pickTag()
    //选择一个并添加高亮
    highlightTag(choiceTag)
    //高亮200ms后移除高亮
    setTimeout(()=>{
      unHighlightTag(choiceTag)
    },200)
  }
  ,200);
//选择20次后停止选择，并决定最后一个
  setTimeout(()=>{
    clearInterval(interVal);
    setTimeout(() => {
      let endTag=pickTag()
      highlightTag(endTag)
      
  }, 200)

  },2000)
}

//随机返回一个tag
function pickTag(){
  const allChoice=document.querySelectorAll(".tag")
  let choice=Math.floor(Math.random()*allChoice.length)
  return allChoice[choice]
}

//添加选中时的背景色
function highlightTag(TAG){
  TAG.classList.add("active")
}
//移除背景色
function unHighlightTag(TAG){
  TAG.classList.remove("active")
}