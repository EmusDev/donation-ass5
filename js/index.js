// console.log('this is log');




document.getElementById('donate-btn').addEventListener('click', function () {

    const donation = donations('input-value');   //input number
    const textNumbers = textNumber('donateAreaAmount'); //donation number
    const totalDonations = totalDonation('total-donate'); // total donation
    if(donation === 0){
        alert('please input the value')
        return
    }
   if(0 >= totalDonations){
    alert('Your donation account full')
    return
   }

   if( donation > totalDonations){
        alert('this is not apply')
        return
   }

   if(donation < 0){
    alert('valid input number')
    return
   }
    
    const totalAmountReduced = totalDonations - donation;
    document.getElementById('total-donate').innerText = totalAmountReduced;
    const donateAreaAmountIncreased = textNumbers + donation;
    document.getElementById('donateAreaAmount').innerText = donateAreaAmountIncreased;
  
    const dotationPlace = document.getElementById('dotation-place').innerText;
    const date = new Date();
    const div = document.createElement('div');
    div.classList.add('bg-gray-200')
    div.classList.add('p-4')

    div.innerHTML = ` <p>
    ${donation} Tk ${dotationPlace}</p>
    <p> ${date} </p>
    `
    document.getElementById('transaction-sections').appendChild(div);
    donation.value = '';
    alert(`success your ${donation} Tk `)
   

})

document.getElementById('donate-btn-feni').addEventListener('click', function () {


    const donation = donations("input-value-feni");   //input number
    const textNumbers = textNumber('donateAreaAmountFeni'); //donation number
    const totalDonations = totalDonation('total-donate'); // total donation

    if(donation === 0){
        alert('please input the value')
        return
    }
   if(0 >= totalDonations){
    alert('Your donation account full')
    return
   }

   if( donation > totalDonations){
        alert('this is not apply')
        return
   }
   
   if(donation < 0){
    alert('valid input number')
    return
   }
    

    const donateAreaAmountIncreased = donation + textNumbers;
    document.getElementById('donateAreaAmountFeni').innerText = donateAreaAmountIncreased;
    const totalAmountReduced = totalDonations - donation;
    document.getElementById('total-donate').innerText = totalAmountReduced;

    const dotationPlace = document.getElementById('dotation-place').innerText;
    const date = new Date();
    const div = document.createElement('div');
    div.classList.add('bg-gray-200')
    div.classList.add('p-4')

    div.innerHTML = ` <p>
    ${donation} Tk ${dotationPlace}</p>
    <p> ${date} </p>
    `
    document.getElementById('transaction-sections').appendChild(div);
    donation.value = '';
    alert(`success your ${donation} Tk `)
 

})


document.getElementById('donate-btn-quota').addEventListener('click', function () {

    const donation = donations("input-quota-amount");   //input number
    const textNumbers = textNumber('quota-amount'); //donation number
    const totalDonations = totalDonation('total-donate'); // total donation

    if(donation === 0){
        alert('please input the value')
        return
    }
   if(0 >= totalDonations){
    alert('Your donation account full')
    return
   }

   if( donation > totalDonations){
        alert('this is not apply')
        return
   }

   
   if(donation < 0){
    alert('valid input number')
    return
   }
    

    const donateAreaAmountIncreased = donation + textNumbers;
    document.getElementById('quota-amount').innerText = donateAreaAmountIncreased;
    const totalAmountReduced = totalDonations - donation;
    document.getElementById('total-donate').innerText = totalAmountReduced;

    const dotationPlace = document.getElementById('donation-place-quota').innerText;
    const date = new Date();
    const div = document.createElement('div');
    div.classList.add('bg-gray-200')
    div.classList.add('p-4')

    div.innerHTML = ` <p>
    ${donation} Tk ${dotationPlace}</p>
    <p> ${date} </p>
    `
    document.getElementById('transaction-sections').appendChild(div)
    donation.value = '';

    alert(`success your ${donation} Tk `)
})


document.getElementById('history-btn').addEventListener('click', function () {
    showSectionBtn('transaction-sections')
})
document.getElementById('nav-donation-btn').addEventListener('click', function () {
    showSectionBtn('donate-container')
})
document.getElementById('blog-btn').addEventListener('click', function () {
    showSectionBtn('quation')
})

 
