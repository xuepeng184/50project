const jokeBtn = document.getElementById('jokeBtn')
const jokeEl = document.getElementById('joke')
console.log(jokeBtn)
jokeBtn.addEventListener("click", getJoke)

function getJoke() {
  axios({
    method: 'get',
    url: "https://icanhazdadjoke.com",
    //设置返回的格式为json    !important
    headers: {
      Accept: 'application/json',
    }
  }).then((Response)=>{
    console.log(Response.data)
    return Response.data
  }).then(resData=>{
    jokeEl.innerHTML=resData.joke;
  })
}