const button=document.getElementById("changecolor");
const colors=["red","blue","yellow","green"];
button.addEventListener("click",function(){
  const randomIndex=Math.floor(Math.random()*colors.length);
  document.body.style.backgroundColor=colors[randomIndex];
});