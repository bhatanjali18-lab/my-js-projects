const quotes=["Believe in yourself.",
    "Never give up.",
    "Small steps lead to big results.",
    "Keep learning every day.",
    "Success takes time.",
    "Your future depends on what you do today."
];

const quote=document.getElementById("quote");
const generateButton=document.getElementById("generate");

generateButton.addEventListener("click",function(){
  const randomIndex=Math.floor(Math.random()*quotes.length);

  quote.textContent=quotes[randomIndex];
})

