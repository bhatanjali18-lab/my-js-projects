//chapter 5 
// q1
/*let arr=[1,2,3,4,56,7,89]
let a=prompt("enter a number")
a=Number.parseInt(a)
arr.push(a)
console.log(arr) 


let arr=[1,3,4,5,6,78]
let a;
do{
  a=prompt("enter a number")
  a=Number.parseInt(a)
  arr.push(a)
} while(a!=0);
console.log(arr)

//q3
let arr=[1,2,30,4,50,34,11]
let n=arr.map((x)=>{
  return x%x
})
console.log(n) */
let arr=[1,2,3,4,5]
let n=arr.reduce((x1,x2)=>{
  return x1*x2
})
console.log(n)

