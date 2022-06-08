// Multi-Section Selectors

// "Job-Role" section selectors
const otherJob = document.querySelector('#other-job-role')
const jobTitle = document.querySelector('#title')

// "T-Shirt Info" section selectors
const shirtDesign = document.querySelector('#design')
const shirtColorSelect = document.querySelector('#color');
const colorOptions = shirtColorSelect.children;

// "Register for Activities section selectors"
const showTotal = document.querySelector('#activities-cost');




// focus the user name text field on page load
userName.focus();

// hides "other" text field until "other" job role is selected
otherJob.style.visibility = 'hidden';
jobTitle.addEventListener('change', (e) => {
    if (e.target.value === 'other'){
        otherJob.style.visibility = 'visible';
    }else {
        otherJob.style.visibility = 'hidden';
    }
})



// disables the color selector until a shirt design is selected
shirtColorSelect.disabled = true;

// provides available color selections for chosen design
shirtDesign.addEventListener('change', (e) => {
    shirtColorSelect.disabled = false;
    for(let i = 1; i < colorOptions.length; i++){
        let value = e.target.value;
        let pick = colorOptions[i];
        let dataTheme = colorOptions[i].getAttribute('data-theme');
        if(value === dataTheme){
            pick.hidden = false;
            pick.selected = true;
        }else {
            pick.hidden = true;
            pick.selected = false;
        }
    }
})



// tracks current total for activities selected
let total = 0;

// checks activity selections then totals the cost
activitySelections.addEventListener('change', (e) => {
    let cost = e.target.getAttribute('data-cost'); //use unary +
    let target = e.target;
    if(target.checked){
        total += +cost;
    } else if(target.checked === false){
        total -= +cost;
    }
    showTotal.innerHTML = `Total: $${total}`;
})



// "Payment Info" section selectors
const paymentChoice = document.querySelector('#payment');
const creditCard = document.querySelector('#credit-card');
const payPal = document.querySelector('#paypal');
const  bitCoin= document.querySelector('#bitcoin');

// sets initial state of the payment section
paymentChoice[1].selected = true;
payPal.style.visibility = 'hidden';
bitCoin.style.visibility = 'hidden';

// changes state to match payment choice input
paymentChoice.addEventListener('change', (e) => {
    let value =  e.target.value;

    if(value === 'paypal'){
        payPal.style.visibility = 'visible';
        creditCard.style.visibility = 'hidden';
    }else if(value === 'bitcoin') {
        bitCoin.style.visibility = 'visible';
        creditCard.style.visibility = 'hidden';
        payPal.style.visibility = 'hidden';
    }else {
        payPal.style.visibility = 'hidden';
        bitCoin.style.visibility = 'hidden';
        creditCard.style.visibility = 'visible';
    }

})



// "Form Validation" section selectors
const userName = document.querySelector('#name'); //multi
const activitySelections = document.querySelector('#activities'); //multi
const emailAddress = document.querySelector('#email');
const cardNumber = document.querySelector('#cc-num');
const zipCode = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const form = document.querySelector('form');

// Validation Checks


form.addEventListener('submit', (e) => {

    // UserName
    const name = /(?=.*(^(?!\s*$).+))(?=.*(^[a-zA-Z0-9_ ]*$))/.test(userName.value);
    
    if (name){
        userName.parentNode.className = 'valid';
        userName.parentNode.className.remove = 'not-valid';
        userName.parentNode.lastElementChild.style.display = 'none';
    } else {
        e.preventDefault();
        userName.parentNode.className = 'not-valid';
        userName.parentNode.className.remove = 'valid';
        userName.parentNode.lastElementChild.style.display = 'initial';
    }


    // Email
    const email = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i.test(emailAddress.value);

    if (email) {
        emailAddress.parentNode.className = 'valid';
        emailAddress.parentNode.className.remove = 'not-valid';
        emailAddress.parentNode.lastElementChild.style.display = 'none';
    } else {
        e.preventDefault();
        emailAddress.parentNode.className = 'not-valid';
        emailAddress.parentNode.className.remove = 'valid';
        emailAddress.parentNode.lastElementChild.style.display = 'initial';
    }



    // Activities
    if (total > 0){
        activitySelections.className = 'valid';
        activitySelections.lastElementChild.style.display = 'none';
        activitySelections.className.remove = 'not-valid';
    }else {
        e.preventDefault();
        activitySelections.className = 'not-valid activities';
        activitySelections.className.remove = 'valid';
        activitySelections.lastElementChild.style.display = 'initial'; 
    }



    // Card Number
    const cardNum = /^\d{13,16}$/.test(cardNumber.value);
    const cardLet = /.*[a-zA-Z].*/.test(cardNumber.value);
    const cardNumSym = /[!@#$%^&*(),.?":{}|<>]/.test(cardNumber.value);

    if (cardNum && cardLet && cardNumSym){
        cardNumber.parentNode.className = 'valid';
        cardNumber.parentNode.lastElementChild.style.display = 'none';
        cardNumber.parentNode.className.remove = 'not-valid';
    }else {
        cardNumber.className = 'not-valid activities';
        cardNumber.className.remove = 'valid';
        cardNumber.lastElementChild.style.display = 'initial';
    }

    // CVV
    const cardSec = /^\d{3}$/.test(cvv.value);

    if (cardSec) {
        cvv.parentNode.className = 'valid';
        cvv.parentNode.lastElementChild.style.display = 'none';
        cvv.parentNode.className.remove = 'not-valid';
    }else {
        e.preventDefault();
        cvv.className = 'not-valid activities';
        cvv.className.remove = 'valid';
        cvv.lastElementChild.style.display = 'initial';
    }


    // Zip Code
    const zip = /^[0-9]{5}$/.test(zipCode.value);

    if (zip){
        zipCode.parentNode.className = 'valid';
        zipCode.parentNode.lastElementChild.style.display = 'none';
        zipCode.parentNode.className.remove = 'not-valid';
    }else {
        e.preventDefault();
        zipCode.parentNode.className = 'not-valid';
        zipCode.parentNode.className.remove = 'valid';
        zipCode.parentNode.lastElementChild.style.display = 'initial';
    }
})


// Accessibility Insurance
const checks = activitySelections.querySelectorAll('input[type=checkbox]');

for (let i = 0; i < checks.length; i++){
    checks[i].addEventListener('focus', (e) => {
        e.target.parentElement.classList.add('focus');
    })
    checks[i].addEventListener('blur', (e) => {
        e.target.parentElement.classList.remove('focus');
    })
}





