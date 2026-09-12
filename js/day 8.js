/*let fruits=["apple","banana","grape"];
fruits.forEach((fruit)=>{
  console.log(fruit)
}) 
let number=[1,2,3,4]
let doubled=number.map((num)=>num*2)
console.log(doubled); 
let price=[100,200,300];
let withTax=price.map(price=>price*1.18);
console.log(withTax) 
let name=["anjali","anu","bavi"];
let capitalized=name.map(name=>name.toUpperCase());
console.log(capitalized);
let numbers=[1,2,3,4,5,6];
let evens=numbers.filter((num)=>num%2===0);
console.log(evens)
let cgpa=[6.0,7.8,9.3];
let goodScore=cgpa.filter(cgpa=>cgpa>=7);
console.log(goodScore); */
let student={
  name:"Anjali",
age:21,isLearning:true
};
console.log(student)
console.log(student.name)
console.log(student["age"])
student.age=32
console.log(student)
student.city="mumbai"
console.log(student)
delete student.age;
console.log(student)
