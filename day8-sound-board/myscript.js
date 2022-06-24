const sounds=['applause','boo','gasp','tada','victory','wrong']

sounds.forEach((sound)=>{
  const btn=document.createElement('button')
  btn.classList.add("btn")
  btn.innerText=sound;
  btn.addEventListener("click",()=>{
    stopSongs();
    document.getElementById(sound).play()
  })
  const grap=document.querySelector("#buttons")
  grap.appendChild(btn)
})

function stopSongs(){
  sounds.forEach((sound)=>{
    const a= document.getElementById(sound)
    //音乐停止，音乐返回初始位置
    a.pause()
    a.currentTime=0;
  })

}