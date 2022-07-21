"use strict";

const container = document.querySelector('.container');
const date_display = document.querySelector('#current-day');
const save_buttons = document.getElementsByClassName('saveBtn');
for (var i = 0; i < save_buttons.len; i++) {
    save_buttons[i].addEventListener('click', saveEvent);
}


function setTime(event) {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        date_display.textContent = moment().format('dddd MMM Do, YYYY, HH:mm');
    }, 1000);
}

// function genDay() {

// }

// genDay();

function saveEvent(event) {
    var selection = event.target;
    console.log(selection);
}



/*  Function to display the date using pure JS, no API  */
/*
function setTime(event) {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        const today = new Date();
        date_display.textContent = (today.getDate() + '/' + months[(today.getMonth())] + '/' + today.getFullYear() + '/' + today.getHours() + ':' + today.getMinutes() + '-' + weekdays[today.getDay()]);
    }, 1000);
}
*/


// if ($ === undefined) {
//     console.log('JQuery not loaded');
// } else {
//     console.log('JQuery loaded');
// }

setTime();