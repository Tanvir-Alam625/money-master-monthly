
const calculateButton = document.getElementById('calculate-button');
// expenses calculation event handler 
calculateButton.addEventListener('click',function(){
    const incomeInput = document.getElementById('monthly-income');
    const incomeValue = incomeInput.value;
    const incomeAmount = parseFloat(incomeValue)
    console.log(incomeAmount);
    if( isNaN(incomeAmount)){
        incomeInput.style.border = '2px solid red'
    }
    else if(incomeAmount  < 0){       
         incomeInput.style.border = '2px solid red'
    }else{
        const totalExpenses = getExpenses();
        console.log(totalExpenses);
        if(incomeAmount > totalExpenses){
            const balance = incomeAmount - totalExpenses;
            document.getElementById('total-expenses').innerText = totalExpenses;
            document.getElementById('balance').innerText = balance;
            incomeInput.style.border = '0px'
            incomeInput.value= ''
        }else{
            alert('your balance is not enough');
        }
    }
});
//  expenses calculation function 
function getExpensesId(expensesId){
    const expensesInput = document.getElementById(expensesId)
    const expensesValue = expensesInput.value;
    const expenses = parseFloat(expensesValue)
    if (isNaN(expenses)){
        expensesInput.style.border = '2px solid red';
    }else if (expenses<0){
        expensesInput.style.border = '2px solid red';
    }
    else{
        expensesInput.style.border = '0px';
        expensesInput.value =''
        return expenses;
    }
}
// expenses addition function
function getExpenses(){
   const fod =  getExpensesId('fod');
   const rent =  getExpensesId('rent');
   const clothes =  getExpensesId('clothes');
   const totalExpenses = fod + rent + clothes;
   return totalExpenses;
}
document.getElementById('save-btn').addEventListener('click',function (){
    getSave()
})
function getInputId(id){
    const input = document.getElementById(id).value;
    const inputValue = parseFloat(input);
    return inputValue;
}
function getSave(){
    // save input 
    const saveInput =document.getElementById('save-value');
    const saveValue = getInputId('save-value');
    // monthly income 
    const expenses = document.getElementById('total-expenses').innerText;
    const expensesCovert = parseFloat(expenses)
    // balance 
    const balanceId =document.getElementById('balance').innerText;
    const balanceCovert = parseFloat(balanceId);
    const balanceAddition = expensesCovert + balanceCovert;
    // calculate 
    const save = (balanceAddition * saveValue)/100;
    if(isNaN(saveValue)){
        saveInput.style.border = '2px solid red';
    }
    else if(save < balanceCovert){
        document.getElementById('saving-amount').innerText = save;
        const remainingBalance = balanceCovert - save;
        document.getElementById('remaining-balance').innerText = remainingBalance;
        saveInput.value = "";
        saveInput.style.border = '0px';
    }else{
        saveInput.style.border = '2px solid red'
    }
    
}