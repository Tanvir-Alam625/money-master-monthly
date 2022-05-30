const calculateButton = document.getElementById("calculate-button");
const saveButton = document.getElementById("save-btn");
// =====================================
// expenses calculation event handler
// =====================================
calculateButton.addEventListener("click", function () {
  const incomeInput = document.getElementById("monthly-income");
  const incomeAmount = getInputId("monthly-income");
  console.log(incomeAmount);
  if (isNaN(incomeAmount)) {
    incomeInput.style.border = "2px solid red";
  } else if (incomeInput.value == "") {
    incomeInput.style.border = "2px solid red";
  } else if (incomeAmount < 0) {
    incomeInput.style.border = "2px solid red";
  } else {
    const totalExpenses = getExpenses();
    console.log(totalExpenses);
    if (incomeAmount > totalExpenses) {
      const balance = incomeAmount - totalExpenses;
      document.getElementById("total-expenses").innerText = totalExpenses;
      document.getElementById("balance").innerText = balance;
      incomeInput.style.border = "0px";
      document.getElementById("income-error-message").style.display = "none";
      incomeInput.value = "";
    } else {
      document.getElementById("income-error-message").style.display = "block";
    }
  }
});
//  expenses calculation function
function getExpensesId(expensesId) {
  const expensesInput = document.getElementById(expensesId);
  const expensesValue = expensesInput.value;
  const expenses = parseFloat(expensesValue);
  if (isNaN(expenses)) {
    expensesInput.style.border = "2px solid red";
  } else if (expenses < 0) {
    expensesInput.style.border = "2px solid red";
  } else {
    expensesInput.style.border = "0px";
    expensesInput.value = "";
    return expenses;
  }
}
// expenses addition function
function getExpenses() {
  const fod = getExpensesId("fod");
  const rent = getExpensesId("rent");
  const clothes = getExpensesId("clothes");
  const totalExpenses = fod + rent + clothes;
  return totalExpenses;
}
// save event handler
saveButton.addEventListener("click", function () {
  getSave();
});
// get input id function
function getInputId(id) {
  const input = document.getElementById(id).value;
  const inputValue = parseFloat(input);
  return inputValue;
}
// get innerText id function
function getInnerId(id) {
  const text = document.getElementById(id).innerText;
  const textValue = parseFloat(text);
  return textValue;
}
function getSave() {
  // save input
  const saveInput = document.getElementById("save-value");
  const saveValue = getInputId("save-value");
  // total expenses
  const expenses = getInnerId("total-expenses");
  // balance
  const balance = getInnerId("balance");
  const balanceAddition = expenses + balance;
  // calculate
  const save = (balanceAddition * saveValue) / 100;
  // error message
  if (isNaN(saveValue)) {
    saveInput.style.border = "2px solid red";
  }
  // saving condition
  else if (save < balance) {
    document.getElementById("saving-amount").innerText = save;
    const remainingBalance = balance - save;
    document.getElementById("remaining-balance").innerText = remainingBalance;
    saveInput.value = "";
    saveInput.style.border = "0px";
  } else {
    // error message
    saveInput.style.border = "2px solid red";
  }
}
