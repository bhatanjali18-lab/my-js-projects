const weightInput=document.getElementById("weight");
const heightInput=document.getElementById("height");
const calculateButton=document.getElementById("calculate");

const result=document.getElementById("result");
const category=document.getElementById("category");

calculateButton.addEventListener("click",function(){
  const weight=Number(weightInput.value);
  const height=Number(heightInput.value);

  if(weight<=0 || height<=0){
    result.textContent="please enter valid values";
    category.textContent="";
    return;
  }
  const heightMeter=height/100;

  const bmi=weight/(heightMeter*heightMeter);
  result.textContent="BMI: "+bmi.toFixed(2);

  if(bmi<18.5){
    category.textContent="Underweight";
  }
  else if(bmi<25){
    category.textContent="normal";
  } else if(bmi<30){
    category.textContent="overweight";
  }
  else {
    category.textContent="Obesity";
  }
});