

function donations(id) {
    const inputText = document.getElementById(id);
    const inputNumber = Number(inputText.value); 
    inputText.value = '';   
    return inputNumber;
    
}

function textNumber(id) {
    const donateAreaAmount = document.getElementById(id);
    const donateAreaAmountNumber = Number(donateAreaAmount.innerText);
    return donateAreaAmountNumber;
}

function totalDonation(id) {
    const totalDonate = document.getElementById(id);
    const totalDonateNumber = Number(totalDonate.innerText);
    return totalDonateNumber;
}

function showSectionBtn(id){
    document.getElementById('quation').classList.add('hidden');
    document.getElementById('donate-container').classList.add('hidden');
    document.getElementById('transaction-sections').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

