const todoList=['make dinner','wash dishes'];
let todoListHTML='';
for(let i=0;i<todoList.length;i++){
  consttodo=todoList[i];
  const html='<p>${todo}</p>';
  todoList+=html;
}
console.log(todoListHTML);

function addTodo(){
const inputElement=document.querySelector('.js-name-input');
const name=inputElement.value;

todoList.push(name);
console.log(todoList);
inputElement.value= '';

}