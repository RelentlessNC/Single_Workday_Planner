/* author: Nicholas Conklin */
"use strict";

const container = document.querySelector('.container');
const dateDisplay = document.querySelector('#current-day');
const saveButtons = document.getElementsByClassName('saveBtn');
const allMemos = document.querySelectorAll('.memo');
const allHours = document.querySelectorAll('.hour');
//console.log(all_rows);
var activityArray = [];
var todays_date = moment().format('dddd MMM Do, YYYY, HH:mm');
for (var i = 0; i < saveButtons.length; i++) {
    saveButtons[i].addEventListener('click', saveEvent);
}


function setTime(event) {
    setInterval(function() {
        dateDisplay.textContent = todays_date;
    }, 1000);
}

function saveEvent(event) {
    localStorage.clear();
    const button = $(this);
    /*
    referring to the button, then its siblings, filtering for
    an element type of input, and asking for the value 
    */
    var text = button.siblings("input").val();
    var hour = button.siblings(0).text().trim();

    var activity = {
        memoid: (button.prev().attr('id')),
        memo: button.siblings("input").val(),
        hour: button.siblings(0).text().trim(),
        date: todays_date
    }

    if (activityArray.includes(arr => arr.includes(activity.memoid))) {
        console.log('array includes memoid ' + memoid);
        var location = activityArray.findIndex(arr => arr.includes(memoid));
        console.log(location);
        activityArray[loc] = activity;
        console.log('activity edited.');
    } else {
        console.log('activityArray does not include memoid ' + activity.memoid);
        activityArray.push(activity);
        console.log('activity pushed.');
    }

    localStorage.setItem('activities', activityArray);
    console.log(activityArray);
    //console.log(JSON.stringifty(localStorage));


}

// for (var i = 0; i < allHours.length; i++) {
//     localStorage.setItem('memo' + [i].toString(), ('memo' + [i].toString()).value());
// }

//     console.log('activity ', activity);
//     console.log('activity array: ', activity_array);

// }


//console.log(activity_loc);

//localStorage.setItem("activity", JSON.stringify(activity));

//console.log(activity_array);


function parse_array() {


}

function init() {
    //activityArray = {...localStorage };
    console.log(activityArray);

    // if (storedTodos !== null) {
    //     todos = storedTodos;
    // }
    // renderTodos();
}

function onLoad() {
    init();
    setTime();
}
onLoad();


//var storedTodos = JSON.parse(localStorage.getItem("todos"));



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



// if ($ === undefined) {
//     console.log('JQuery not loaded');
// } else {
//     console.log('JQuery loaded');
// }




/*   BCS CODE HELP  */
/*
<div class="col-lg-1 saveBtn" id="9AM">
    <i class="material-symbols-outlined"> save </i>
</div>


$("#9AM").click(function () {
  // this refers to the button itself
  const button = $(this);

  console.log(button);
});



$("#9AM").click(function () {
  // this refers to the button itself
  const button = $(this);

  /*
  referring to the button, then its siblings, filtering for
  an element type of input, and asking for the value
  */
/*
  const text = button.siblings("input").val();

  console.log(text);
});
*/


/*
$(".row").each(function (index) {
  const baseNumber = 9;

  $("#" + (baseNumber + index) + "AM").click(function () {
    // this refers to the button itself
    const button = $(this);

    /*
      referring to the button, then its siblings, filtering for
      an element type of input, and asking for the value
      */
/*
      const text = button.siblings("input").val();

      console.log(text);
    });
  });
  */