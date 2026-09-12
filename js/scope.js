/*let outerVar="i am outside";
function myFunction(){
  let innerVar="i m inside"
  console.log(outerVar)
  console.log(innerVar)
}
myFunction();
console.log(outerVar); 
let taskList="my task";
function showList(){
  let taskCount=5;
  console.log((taskCount))
  console.log(taskList)
}
showList(); 
if(true){
  let blockScope="only visible in this block";
  console.log(blockScope)
}
const scores=[34,67,89];
scores.push(100);
console.log(scores); 
function calculateTotal(){
  let total=0;
  for(let i=1;i<=5;i++){
    total+=i;
  }
  return total;
}
console.log(calculateTotal())
let appName="cgpa calculator"
function displayWelcome(){
  let version="1.0"
  console.log(appName)
  console.log(version)
}
displayWelcome();
let name="anjali"
let age=21;
console.log("my name is "+ age)
console.log('my name ${name} and my ${age}years old');
let subject="javascript"
let day=15;
console.log('day ${day}:learning ${subject}') */
let cgpa=8.5;
console.log('status: ${cgpa>=7.5 ? "good standing":"need improvement"}')
let a=5;
let b=7;
console.log('sum:${a+b}');
let message='Line one
Line two
Line three';
console.log(message)
averageDisplay.textContent = "Average CGPA: " + avg.toFixed(2);