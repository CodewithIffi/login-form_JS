const username = document.querySelector('#username');
const email = document.querySelector('#email');
const CNIC = document.querySelector('#CNIC');
const Age = document.querySelector('#Age');
const password = document.querySelector('#password');
const form = document.querySelector('#form');

const usernameRegex = /^[a-zA-Z0-9]{4,15}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
const cnicRegex = /^[0-9]{13}$/;
const ageRegex = /^(1[8-9]|[2-5][0-9]|60)$/;


form.addEventListener('submit', function (event) {
    event.preventDefault()
    console.log(usernameRegex.test(document.getElementById("username").value));
    console.log(emailRegex.test(document.getElementById("email").value));
    console.log(cnicRegex.test(document.getElementById("cnic").value));
    console.log(ageRegex.test(document.getElementById("age").value));
    console.log(passwordRegex.test(document.getElementById("password").value));

})


