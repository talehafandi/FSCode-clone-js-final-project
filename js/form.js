let namePattern = /\d/g;
let mailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let phonePattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

// let message = document.querySelector('.form__message');
let submit = document.querySelector('.contact__form-submit');
let nameAlert = document.querySelector('.contact__name-alert');
let emailAlert = document.querySelector('.contact__email-alert');
let phoneAlert = document.querySelector('.contact__phone-alert');
let input = document.querySelector('#name');
let confMessage = document.querySelector('.contact__confirmation-message');

submit.addEventListener('click', () => {
    let name = document.querySelector('#name').value;
    let category = document.querySelector('#jobs').value;
    let email = document.querySelector('#form__email').value;
    let number = document.querySelector('#phone').value;
    let checkbox = document.querySelector('#checkbox');

    console.log(namePattern.test(name));

    if(!namePattern.test(name) && mailPattern.test(email) && phonePattern.test(number) && checkbox.checked){
        submit.style.transitionDuration = '0s';
        submit.style.display = 'none';
        confMessage.style.display = 'flex';
        name = '';
        category = '';
        email = '';
        number = '';
        checkbox = '';
        document.getElementById("contact__form").reset();
        return;
    }
    
    if(namePattern.test(name)){
        nameAlert.innerHTML = 'Characters are incorrect';
        nameAlert.style.color = 'red';
        input.style.color = 'red';
    }
    if(!mailPattern.test(email)){
        emailAlert.innerHTML = 'Enter a valid mail address';
        emailAlert.style.color = 'red';
    }
    if(!phonePattern.test(number)){
        phoneAlert.innerHTML = 'Enter a valid phone number';
        phoneAlert.style.color = 'red';
    }

    
});
