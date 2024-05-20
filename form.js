const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');


form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(username.value);
    console.log(email.value);
    console.log(password.value);
})



