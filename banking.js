// handle diposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
    let depositInput = document.getElementById('deposit-input');
    let newDepositAmountText = depositInput.value;
    let newDepositAmount = parseFloat(newDepositAmountText);


    let depositTotal = document.getElementById('deposit-total');
    let previousDepositText = depositTotal.innerText;
    let previousDepositAmount = parseFloat(previousDepositText);
    let newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account banace
    let balanceTotal = document.getElementById('balance-total');
    let balanceTotalText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(balanceTotalText);

    let newBalanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
})

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    let withdrawInput = document.getElementById('withdraw-input');
    let withdrawAmountText = withdrawInput.value;
    let newWithdrawAmount = parseFloat(withdrawAmountText);

    // set withdraw total 
    let withdrawTotal = document.getElementById('withdraw-total');
    let previousWithdrawText = withdrawTotal.innerText;
    let previousWithdrawTotal = parseFloat(previousWithdrawText);
    let newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;


    // update balance

    let balanceTotal = document.getElementById('balance-total');
    let previousBalanceText = balanceTotal.innerText;
    let previousBalanceTotal = parseFloat(previousBalanceText);
    let newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear withdraw
    withdrawInput.value = '';

})






