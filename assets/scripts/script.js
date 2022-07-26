/* author: Nicholas Conklin */
"use strict";

const container = document.querySelector('.container');
const dateDisplay = document.querySelector('#current-day');
const saveButtons = document.getElementsByClassName('saveBtn');
const allMemos = document.querySelectorAll('.memo');
const allHours = document.querySelectorAll('.hour');
const clear = document.getElementById('btn-clear');
var activityArray = [];
var todaysDate = moment().format('dddd MMM Do, YYYY, HH:mm');


//  add the same event listener to all the save buttons
for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', saveEvent);
}

/*  I am still working on the extra functionality of the clearAll function to delete all the events saved in the schedule */

// clear.addEventListener('click', clearAll);
// function clearAll() {
//     for (var i = 0; i < allMemos.length; i++) {
//         allMemos[i].textContent = '';
//     }
// }

function setTime(event) {

    setInterval(function() {
        dateDisplay.textContent = todaysDate;
        for (var i = 0; i < allHours.length; i++) {
            //  every time the interval is ran, check all hours to see if they are in the 
            //  past present or future and change the class appropriately
            if (allHours[i].id > moment().hours()) {
                allHours[i].nextElementSibling.setAttribute('class', 'future col-lg-10 description memo');
            } else if (allHours[i].id < moment().format('HH')) {
                allHours[i].nextElementSibling.setAttribute('class', 'past col-lg-10 description memo');
            } else {
                allHours[i].nextElementSibling.setAttribute('class', 'present col-lg-10 description memo');
            }
        }
    }, 1000);
}



function saveEvent(event) {
    const button = $(this);
    /*
    referring to the button, then its siblings, filtering for
    an element type of input, and asking for the value 
    */
    var text = button.siblings("input").val();
    var hour = button.siblings(0).text().trim();

    // create the individual activity object
    var activity = {
        memoid: (button.prev().attr('id')),
        memo: button.siblings("input").val(),
        hour: button.siblings(0).text().trim(),
        date: todaysDate
    }

    //  search the array to see if the current object matches any objects in the array.
    //  if there is a match, replace the memo in the array
    //  if no match, then add the current activity to the array
    if (activityArray.find(obj => obj.memoid === activity.memoid)) {
        var location = activityArray.findIndex(obj => obj.memoid === activity.memoid);
        activityArray[location] = activity;
    } else {
        activityArray.push(activity);
    }

    // save the activityArray variable to the local storage
    localStorage.setItem('activities', JSON.stringify(activityArray));
}


/* init runs when the page loads.  
I parse everything from the key 'activities' in local storage 
and save it into my activityArray.
Then I run through the array and get the activity id and set the value 
to each corresponding memo  */
function init() {
    if (localStorage.length > 0) {
        activityArray = JSON.parse(localStorage.getItem("activities"));
        if (activityArray.length > 0) {
            for (var i = 0; i < activityArray.length; i++) {
                var insert = document.getElementById(activityArray[i].memoid);
                insert.setAttribute('value', activityArray[i].memo);
            }
        }
    }
}


function onLoad() {
    init();
    setTime();
}
onLoad();


/*  Function to display the date using pure JS, no API  */

// function setTime(event) {
//     const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//     // Sets interval in variable
//     var timerInterval = setInterval(function() {
//         const today = new Date();
//         date_display.textContent = (today.getDate() + '/' + months[(today.getMonth())] + '/' + today.getFullYear() + '/' + today.getHours() + ':' + today.getMinutes() + '-' + weekdays[today.getDay()]);
//     }, 1000);
// }