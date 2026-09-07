 /* let num=[5,8,45,21,3]
 /* for(let i=0;i<num.length;i++){
    console.log(num[i])
  } 
 num.forEach((element)=>{
  console.log(element*element)
 })

 let name="anjali" //array.from
 let arr=Array.from(name)
 console.log(arr)
 // for of
 for(let i in num){
  console.log(i)
 }  
let count=0
let intervalId=setInterval(()=>{
  count++;
  console.log(count);
  if(count==5){
    clearInterval(intervalId);
    console.log("stopped")
  }
},1000);
console.log("Step 1: Starting");

setTimeout(() => {
  console.log("Step 2: First task done");

  setTimeout(() => {
    console.log("Step 3: Second task done");

    setTimeout(() => {
      console.log("Step 4: All tasks done");
    }, 1000);
  }, 1000);
}, 1000);*/
console.log("program started")
setTimeout(()=>{
  console.log("this runs after 1 second")
},1000);
console.log("program continues immediately")
let loadBtn=document.querySelector("#load-btn");
let status=document.querySelector("#status");
loadBtn.addEventListener("click",()=>{
  status.textContent="calculating your cgpa...";
  status.style.color="orange";
  setTimeout(()=>{
    let cgpaList=[8.6,9.0,7.8,8.3];
    let average=cgpaList.reduce((acc,curr)=>acc +curr,0)/cgpaList.length;
    status.textContent='your CGPA is ${average.toFixed(2)}';
    status.style.color="green";
  },2000)
});