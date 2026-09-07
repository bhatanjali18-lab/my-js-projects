
/*let heading = document.querySelector("#main-heading");
heading.textContent = "Welcome, Anjali!";

let paragraph = document.querySelector(".description");
paragraph.textContent = "JavaScript is now controlling this page.";

let cgpaDisplay = document.querySelector("#cgpa-display");
let cgpaList = [8.5, 9.0, 7.8, 8.2];
let average = cgpaList.reduce((acc, curr) => acc + curr, 0) / cgpaList.length;

cgpaDisplay.textContent = "CGPA: " + average.toFixed(2);let paragraph=document.querySelector(".description");
paragraph.classList.add("highlight");
console.log(paragraph.classList.contains("highlight"))
paragraph.classList.remove("highlight"); 
let paragraph=document.querySelector(".description");
paragraph.classList.add("highlight");
console.log(paragraph.classList.contains("highlight"));
paragraph.classList.remove("highlight");
let image=document.querySelector("#my-image");
console.log(image.getAttribute("src"));
let button = document.querySelector("#my-button");
button.setAttribute("disabled", "true");
console.log(button.getAttribute("disabled"));
let items=document.querySelectorAll(".item")
items.forEach((item)=>{
  item.style.color="purple";
});
let allParagraphs=document.querySelectorAll("p");
allParagraphs.forEach((p)=>{
  p.classList.add("highlight");
});
let newParagraph=document.createElement("p")
newParagraph.textContent="i was created "
document.body.appendChild(newParagraph)
let newHeading = document.createElement("h2");
newHeading.textContent = "New Section";
newHeading.style.color = "darkblue";

document.body.appendChild(newHeading);*/
let heading = document.querySelector("#main-heading");
heading.classList.add("highlight");

let items = document.querySelectorAll("#cgpa-list .item");

items.forEach((item) => {
  let cgpa = parseFloat(item.textContent);
  
  if (cgpa >= 7) {
    item.classList.add("pass");
  } else {
    item.classList.add("fail");
  }
});

let summary = document.createElement("p");
summary.textContent = "CGPA list evaluated - green means good standing, red needs improvement.";
document.body.appendChild(summary);