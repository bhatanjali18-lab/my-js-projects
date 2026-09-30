// Get HTML elements

const form = document.getElementById("expenseForm");

const expenseList = document.getElementById("expenseList");

const submitButton = document.getElementById("submitButton");

const totalAmount = document.getElementById("totalAmount");

const summary = document.getElementById("summary");

const searchInput = document.getElementById("searchInput");

const categoryFilter = document.getElementById("categoryFilter");
const monthlySummary =
    document.getElementById("monthlySummary");


// Expense array

const expenses = [];


// Index of expense being edited

let editIndex = -1;


// Load saved expenses

const savedExpenses = JSON.parse(
    localStorage.getItem("expenses")
);


if (savedExpenses) {

    expenses.push(...savedExpenses);

}


// Save expenses to localStorage

function saveExpenses() {

    localStorage.setItem(
        "expenses",
        JSON.stringify(expenses)
    );

}


// Add or Update Expense

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("expenseName").value;

    const amount =
        document.getElementById("amount").value;

    const category =
        document.getElementById("category").value;

    const date =
        document.getElementById("date").value;


    const expense = {

        name: name,

        amount: amount,

        category: category,

        date: date

    };


    // Add new expense

    if (editIndex === -1) {

        expenses.push(expense);

    }

    // Update existing expense

    else {

        expenses[editIndex] = expense;

        editIndex = -1;

        submitButton.textContent = "Add Expense";

    }


    // Save

    saveExpenses();


    // Display

    displayExpenses();


    // Clear form

    form.reset();

});


// Display Expenses

function displayExpenses(list = expenses) {

    expenseList.innerHTML = "";


    let total = 0;


    list.forEach(function(expense) {

        total =
            total + Number(expense.amount);


        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>${expense.name}</td>

            <td>₹${expense.amount}</td>

            <td>${expense.category}</td>

            <td>${expense.date}</td>

            <td>

                <button
                    onclick="editExpense(${expenses.indexOf(expense)})">
                    Edit
                </button>

                <button
                    onclick="deleteExpense(${expenses.indexOf(expense)})">
                    Delete
                </button>

            </td>

        `;


        expenseList.appendChild(row);

    });


    totalAmount.textContent = total;


    displaySummary();
    displayMonthlySummary();

}


// Display Expense Summary

function displaySummary() {


    const categoryTotal = {

        Food: 0,

        Travel: 0,

        Education: 0,

        Shopping: 0,

        Other: 0

    };


    expenses.forEach(function(expense) {

        categoryTotal[expense.category] =
            categoryTotal[expense.category]
            + Number(expense.amount);

    });


    summary.innerHTML = "";


    for (let category in categoryTotal) {

        const p =
            document.createElement("p");


        p.textContent =
            category +
            ": ₹" +
            categoryTotal[category];


        summary.appendChild(p);

    }

}


// Edit Expense

function editExpense(index) {


    const expense =
        expenses[index];


    document.getElementById("expenseName").value =
        expense.name;


    document.getElementById("amount").value =
        expense.amount;


    document.getElementById("category").value =
        expense.category;


    document.getElementById("date").value =
        expense.date;


    editIndex = index;


    submitButton.textContent =
        "Update Expense";

}


// Delete Expense

function deleteExpense(index) {


    expenses.splice(index, 1);


    saveExpenses();


    displayExpenses();

}


// Search Expense

searchInput.addEventListener("input", function() {


    applyFilters();

});


// Category Filter

categoryFilter.addEventListener("change", function() {


    applyFilters();

});


// Apply Search + Category Filter

function applyFilters() {


    const searchText =
        searchInput.value.toLowerCase();


    const selectedCategory =
        categoryFilter.value;


    const filteredExpenses =
        expenses.filter(function(expense) {


            const matchesSearch =
                expense.name
                    .toLowerCase()
                    .includes(searchText);


            const matchesCategory =
                selectedCategory === "All" ||
                expense.category === selectedCategory;


            return matchesSearch &&
                   matchesCategory;

        });


    displayExpenses(filteredExpenses);

}


// Display saved expenses when page opens

displayExpenses();
function displayMonthlySummary() {

    const monthlyTotal = {};

    expenses.forEach(function(expense) {

        const month = expense.date.substring(0, 7);

        if (monthlyTotal[month]) {

            monthlyTotal[month] =
                monthlyTotal[month] +
                Number(expense.amount);

        } else {

            monthlyTotal[month] =
                Number(expense.amount);

        }

    });


    monthlySummary.innerHTML = "";


    for (let month in monthlyTotal) {

        const p =
            document.createElement("p");

        p.textContent =
            month + ": ₹" +
            monthlyTotal[month];

        monthlySummary.appendChild(p);

    }

}