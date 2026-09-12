let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

const form = document.getElementById('expense-form');
const list = document.getElementById('expense-list');
const totalEl = document.getElementById('total');
const filterEl = document.getElementById('filter-category');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const description = document.getElementById('description').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const category = document.getElementById('category').value;

  const newExpense = {
    id: Date.now(),
    description,
    amount,
    category
  };

  expenses.push(newExpense);
  saveAndRender();
  form.reset();
});

function deleteExpense(id) {
  expenses = expenses.filter(expense => expense.id !== id);
  saveAndRender();
}

function render() {
  const filterValue = filterEl.value;
  list.innerHTML = '';

  const filtered = filterValue === 'all'
    ? expenses
    : expenses.filter(expense => expense.category === filterValue);

  filtered.forEach(expense => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${expense.description} (${expense.category}) - ₹${expense.amount}</span>
      <button type="button" class="delete-btn">X</button>
    `;
    li.querySelector('.delete-btn').addEventListener('click', () => deleteExpense(expense.id));
    list.appendChild(li);
  });

  const total = filtered.reduce((sum, expense) => sum + expense.amount, 0);
  totalEl.textContent = total.toFixed(2);
}

function saveAndRender() {
  localStorage.setItem('expenses', JSON.stringify(expenses));
  render();
}

filterEl.addEventListener('change', render);

render(); // initial render on page load