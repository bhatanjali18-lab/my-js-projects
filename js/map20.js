/*let arr=[34,65,12]//map method
let a=arr.map((value,index,array)=>{
  console.log(value,index,array)
  return value+index
})
console.log(a) 
//array filter method
let arr2=[5,78,6,32,4]
let a2=arr2.filter((a) =>{
  return a<10
})
console.log(a2,arr2)*/
//array reduce method
let arr3=[1,2,43,5,6]
let newarr=arr3.reduce((h1,h2)=>
{
  return h1+h2
})
console.log(newarr)
