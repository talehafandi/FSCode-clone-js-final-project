const registeredUsers = ['test@gmail.com'];
let messages = document.querySelector('.footer__confirmation-message');
let subSection = document.querySelector('.footer__mail');
let subscribeBtn = document.querySelector('#subscribe');
let alert = document.querySelector('.emailAlert');
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

subscribeBtn.addEventListener('click', () => {
    let emailAddress = document.querySelector('.email').value;
    console.log(emailAddress);
    if (emailAddress.match(pattern) && !registeredUsers.includes(emailAddress)) {
        registeredUsers.push(emailAddress);
        emailAddress = '';
        document.querySelector('.email').value ='';
        alert.innerHTML = '';
        subscribeBtn.style.transitionDuration = '0s';
        messages.style.display = 'flex';
        subSection.style.visibility = 'hidden';
    }
    else if (registeredUsers.includes(emailAddress)) {
        alert.innerHTML = 'This email already subscribed';
    }
    else if (!emailAddress.match(pattern)) {
        alert.innerHTML = 'Please enter a valid email address';
    };

    console.log(registeredUsers);
});


console.log('emailAddress');
// console.log(emailAddress);
// console.log(registeredUsers);