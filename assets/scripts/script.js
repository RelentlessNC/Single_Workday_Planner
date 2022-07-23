"use strict";

const container = document.querySelector('.container');
const date_display = document.querySelector('#current-day');
const save_buttons = document.getElementsByClassName('saveBtn');
const all_rows = document.querySelectorAll('.row');
//console.log(all_rows);
var activity_array = [];
var todays_date = moment().format('dddd MMM Do, YYYY, HH:mm');
for (var i = 0; i < save_buttons.length; i++) {
    save_buttons[i].addEventListener('click', saveEvent);
}


function setTime(event) {
    setInterval(function() {
        date_display.textContent = todays_date;
    }, 1000);
}

function saveEvent(event) {
    const button = $(this);
    /*
    referring to the button, then its siblings, filtering for
    an element type of input, and asking for the value 
    */
    var text = button.siblings("input").val();
    var activity = {
            saveid: button.attr('id'),
            memoid: (button.prev().attr('id')),
            memo: button.siblings("input").val(),
            hour: button.siblings(0).text().trim(),
            date: todays_date
        }
        // var myFind = activity_array.find(object => {
        //     return object.memoid === activity.memoid;
        // })
        // //edit myFind with new content
        // console.log(myFind);
        // console.log(activity_array);
    array_length = activity_array.length;
    if (length != 0) {
        for (var i = 0; i < array_length; i++) {
            if (activity_array[i].memoid === activity.memoid) {
                activity_array[i] = activity;
            } else {
                activity_array.push(activity);
            }
        }
    } else {
        activity_array.push(activity);
    }
    console.log('activity ', activity);
    console.log('activity array: ', activity_array);

}


//console.log(activity_loc);

//localStorage.setItem("activity", JSON.stringify(activity));

//console.log(activity_array);


function parse_array() {
    var activity = JSON.parse(localStorage.getItems("activity_array"));
    console.log(activity.memoid);

}

function init() {
    if (activity_array) {
        activity_array.forEach(parse_array); {
            //JSON.parse(localStorage.getItems("activity_array"));
        }
    }
}

function onLoad() {
    init();
    setTime();
}
onLoad();


//var storedTodos = JSON.parse(localStorage.getItem("todos"));



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