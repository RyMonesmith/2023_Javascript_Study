// setup acess to html elements
const buttons = document.querySelectorAll('button');
const display = document.querySelector('.display');

//add eventListener to each button
buttons.forEach(
    function(button) {
        button.addEventListener('click', calculate);
    }
);

//calculate function - event handler for all buttons
function calculate(event) {
    //what button was clicked?
    const clickedValue = event.target.value;

    //check if = sign was clicked
    if(clickedValue === "="){
        //check if display is empty
        if(display.value !== ""){
            //display the value in the top of calculator
            display.value = eval(display.value);
        }
    } else if(clickedValue === "C"){
        //clear the display
        display.value = "";
    } else {
        //otherwise concatenate the clicked value to the display
        display.value += clickedValue;
    }
}

