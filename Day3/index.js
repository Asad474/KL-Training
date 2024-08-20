//DOM
//Tags used in html are called Elements

console.log("DOM");

//Changin content of h1 tag with id

// 1. using getElementById
document.getElementById('h-form').textContent = "Document Object Model"

// 2. using querySelector

// For id, we use #
// For class, we use .
document.querySelector('h1').textContent = "DOM Javascipts"

// Changing heading color
document.querySelector('.heading-form').style.color = 'red';

// Align h1 to center
document.querySelector('.heading-form').innerHTML = '<h1><center>Javascript DOM</center></h1>';

// Handling form
const form_handler = document.querySelector('.form-handler');
form_handler.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const classroom = document.querySelector('#classroom').value;

    console.log(name);
    console.log(email);
    console.log(classroom);

    const result = document.querySelector('.result');
    result.textContent = name + " " + email + " " + classroom;
})