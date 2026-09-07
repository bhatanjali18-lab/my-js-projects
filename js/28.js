/*const nums=[10,20,30];
nums[2]=99;
console.log(nums); 
const array=[10,20,30];
function getLat(array){
  return array[array.length-1]

}

for(let i=0;i<=10;i+=2){
  console.log(i);
}
for(let i=5;i>=0;i--){
  console.log(i);
} 
let i=0;
while(i<=10){
  console.log(i);
  i+=2;
} 
let i=5;
while(i>0){
  console.log(i);
  i--;
}
let array=[9,8,5];
function incrementAll(array){
  const result=[];
  for(let i=0;i<array.length;i++){
    result.push(array[i]+1);
  }
  return result;

} 
function arraySwap(array){
  const lastIndex=array.length-1;
  const firstValue=array[0];
  array[0]=array[lastIndex];
  array[lastIndex]=array[firstValue];
  return array;
}
console.log(arraySwap([1,5,9,8,7])
function addArray(a1,a2){
  const result=[];
  for(let i=0;i<a1.length;i++){
    result.push(a1[i]+a2[i])
  }
  return result;
}
console.log(addArray([1,2,3],[2,5,6]));
function Count(nums){
  let count=0;
  for(i=0;i<nums.length;i++){
    if(nums[i]>0){
      count++;
    }
  }
  return count;
}
console.log(Count([-1,4,0,6,0])) 
function maxMin(nums){
  let min=nums[0];
  let max=nums[0];
  for(let i=1;i<nums.length;i++){
    if(nums[i]>max){
      max=nums[i];
    }
    if(nums[i]<min){
      min=nums[i];
    }
    return {
      min:min,
      max:max

  };
}
console.log(minMax([1,3,5]));
const word=['hello','hi','ok'];
let found=false;
for(let i=0;i<word.length;i++){
  if(word[i]==='hie'){
    console.log(i);
    found=true;
    break;
  }
}
if(!found){
  console.log(-1)
}
const words=['hi','ll','ret'];
for(let i=0;i<words.length;i++){
  if(words[i==='ll']){
    console.log(i);
    break;
  }
  if()
}*/
  function findIndex(array,word){
    for(let i=0;i<array.length;i++)
{
if(array[i]===word){
  return i;
}
}  
return -1;
}
console.log(findIndex(['arra','yy'],'yy'));