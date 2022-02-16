
const calculateButton = document.getElementById('calculate-button');
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
        if(incomeAmount> totalExpenses){
            const balance = incomeAmount - totalExpenses;
            document.getElementById('total-expenses').innerText = totalExpenses;
            document.getElementById('balance').innerText =balance;
            incomeInput.style.border = '0px'
            incomeInput.value= ''
        }else{
            alert('your balance is not enough')
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
function getExpenses(){
   const fod =  getExpensesId('fod');
   const rent =  getExpensesId('rent');
   const clothes =  getExpensesId('clothes');
   const totalExpenses = fod + rent + clothes;
   return totalExpenses;
}