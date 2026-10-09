const temperatureInput=document.getElementById("temperature");
const conversion=document.getElementById("conversion");
const convertButton=document.getElementById("convert");
const result=document.getElementById("result");
convertButton.addEventListener("click",function(){
  const temperature=Number(temperatureInput.value);
  if(temperatureInput.value.trim()===""){
    result.textContent="please enter a temperature";
    return;
  }
  let convertedTemperature;
  if(conversion.value==="Ctof"){
  convertedTemperature=(temperature*9/5)+32;
  result.textContent=convertedTemperature.toFixed(2)+"F";
}
else {
  convertedTemperature = (temperature - 32) * 5 / 9;

        result.textContent =
            convertedTemperature.toFixed(2) + " °C";
    }
});