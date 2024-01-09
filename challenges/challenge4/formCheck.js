// Gain Access to form elements
const submitButton = document.getElementById('submit');
const namefield = document.getElementById('name');
const emailfield = document.getElementById('email');
const phonefield = document.getElementById('phone');
// Add event listener to submit button
submitButton.addEventListener('click', checkForm);


function checkForm() {



    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise do nothing.
     */

    //check name field
    if(namefield.value === ""){
        namefield.style.backgroundColor = "red";
    } else {
        namefield.style.backgroundColor = "white";
    }

    alert("It is hooked up!");
}