const guessInput=document.getElementById("guessInput");
const checkButton=document.getElementById("checkButton");
const message=document.getElementById("message");
const attemptsDisplay=document.getElementById("attempts");
const researchButton=document.getElementById("restartButton");

let secretNumber=Math.floor(Math.random()*100)+1;
let attempts=0;

checkButton.addEventListener("click",function(){
  const guess=Number(guessInput.value);
   if (guessInput.value.trim() === "" || guess < 1 || guess > 100) {
        message.textContent = "Enter a number between 1 and 100.";
        return;
    }

    attempts++;
    attemptsDisplay.textContent = attempts;

    if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
    }
    else if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
    }
    else {
        message.textContent = "Correct! You won! 🎉";
        checkButton.disabled = true;
    }

    guessInput.value = "";
});
restartButton.addEventListener("click", function() {

    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;

    attemptsDisplay.textContent = attempts;
    message.textContent = "";
    guessInput.value = "";

    checkButton.disabled = false;
});