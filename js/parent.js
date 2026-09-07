/*let secondChild=document.querySelector("second-child")
console.log(secondChild.parentElement);
let firstChild = document.querySelector("#first-child");
console.log(firstChild.parentElement.id);
let parent = document.querySelector("#parent");
console.log(parent.children);
let parent = document.querySelector("#parent");
console.log(parent.children[0]);
console.log(parent.children[1]);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
let list = document.querySelector("#task-list");

// Loop through children using traversal, without querySelectorAll
let current = list.firstElementChild;

while (current !== null) {
  console.log(current.textContent);
  current = current.nextElementSibling;
}*/
function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      console.log(count);
    },
    decrement: function () {
      count--;
      console.log(count);
    },
    reset: function () {
      count = 0;
      console.log(count);
    }
  };
}

let counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
//counter.reset();