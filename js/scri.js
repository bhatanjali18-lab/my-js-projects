/*let taskInput = document.querySelector("#task-input");
let addTaskBtn = document.querySelector("#add-task");
let taskList = document.querySelector("#task-list");
let taskCount = document.querySelector("#task-count");

addTaskBtn.addEventListener("click", () => {
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    console.log("Please enter a task.");
    return;
  }

  createTaskElement(taskText);
  taskInput.value = "";
  updateTaskCount();
});

function createTaskElement(taskText) {
  let li = document.createElement("li");

  let span = document.createElement("span");
  span.textContent = taskText;

  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  span.addEventListener("click", () => {
    span.classList.toggle("done");
    updateTaskCount();
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
    updateTaskCount();
  });
}

function updateTaskCount() {
  let allTasks = document.querySelectorAll("#task-list li");
  let remaining = 0;

  allTasks.forEach((task) => {
    let span = task.querySelector("span");
    if (!span.classList.contains("done")) {
      remaining++;
    }
  });

  taskCount.textContent = remaining + " tasks remaining";
}
let loadBtn = document.querySelector("#load-btn");
let status = document.querySelector("#status");

loadBtn.addEventListener("click", () => {
  status.textContent = "Loading...";

  setTimeout(() => {
    status.textContent = "Data loaded successfully!";
  }, 2000);
});
console.log("program started")
setTimeout(()=>{
  console.log("this runs after 1 second")
},1000);
console.log("program continues immediately")
let loadBtn=document.querySelector("#load-btn");
let status=document.querySelector("#status");
loadBtn.addEventListener("click",()=>{
  status.textContent="calculating your cgpa...";
  status.style.color="orange";
  setTimeout(()=>{
    let cgpaList=[8.6,9.0,7.8,8.3];
    let average=cgpaList.reduce((acc,curr)=>acc +curr,0)/cgpaList.length;
    status.textContent='your CGPA is ${average.toFixed(2)}';
    status.style.color="green";
  },2000)
});
let fetchBtn = document.querySelector("#fetch-btn");
let userInfo = document.querySelector("#user-info");
fetchBtn.addEventListener("click", () => {
userInfo.textContent = "Loading...";
fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response) => response.json())
.then((data) => {
userInfo.innerHTML = `
<p>Name: ${data.name}</p>
<p>Email: ${data.email}</p>
<p>City: ${data.address.city}</p>
`;
});
}); */
let fetchBtn = document.querySelector("#fetch-btn");
let userInfo = document.querySelector("#user-info");
fetchBtn.addEventListener("click",async()=>{
  userInfo.textContent = "Loading...";
try{
let response = awaitfetch("https://jsonplaceholder.typicode.com/users/1");
let data = await response.json();
    userInfo.innerHTML = `
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>City: ${data.address.city}</p>
    `;
}catch(error){
    userInfo.textContent = "Failed to load user data.";
}
});
let loadUsersBtn = document.querySelector("#load-users-btn");
let userList = document.querySelector("#user-list");
loadUsersBtn.addEventListener("click",async()=>{
try{
let response = awaitfetch("https://jsonplaceholder.typicode.com/users");
let users = await response.json();
    userList.innerHTML = "";
    users.forEach((user)=>{
let li = document.createElement("li");
      li.textContent = `${user.name} (${user.email})`;
      userList.appendChild(li);
});
}catch(error){
    userList.innerHTML = "<li>Failed to load users.</li>";
}
})