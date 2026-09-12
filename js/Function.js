function greetUser(name){
  console.log("welcome " + name + "!")
} greetUser("anjali")
function calculateSum(a,b){
  return a+b;
}
console.log(calculateSum(3,7))

function isEven(num){
  return num%2===0
}
console.log(isEven(3))
function calculateAverage(numbers){
  let sum=0;
  for(let i=0;i<numbers.length;i++){
    sum+=numbers[i];
  }
  return sum/numbers.length;
}
let score=[34,65,42,98];
console.log(calculateAverage(score))
function multiply (a,b){
  return a*b;

}
//let area=multiply(4,5)
console.log(multiply(3,4))