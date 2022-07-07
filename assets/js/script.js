//Set variables, referring to HTML elements
var todaysDate = document.querySelector('#currentDay');
var hourBlock = document.querySelectorAll('.hour');
var textTime = document.querySelectorAll('.description');
var timeDay = document.querySelectorAll('.time-block');
var saveBtn = document.querySelectorAll('.saveBtn');

//Moment.js time reference
var day = moment().format('dddd');
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var timeNow = moment().format('LT');
var hour = moment().hour();

//Set date header
todaysDate.innerText = day + ', ' + date;

//Mark text fields as past, present, or future relative to current time
for (i=0; i < hourBlock.length; i++) {
    var hourVal = hourBlock[i].id;
    if (hourVal > hour) {
        textTime[i].classList.add('future');
    } 
    else if (hourVal == hour) {
        textTime[i].classList.add('present');
    } else {
        textTime[i].classList.add('past');
    }
};

//Save text to local storage when save button clicked and persist text when not changed
for (i=0; i < textTime.length; i++) {
    var keyRetrieve = textTime[i].id;
    textTime[i].value = localStorage.getItem(keyRetrieve);

    saveBtn[i].addEventListener('click', function(event) {
        event.preventDefault();
        var parentEl = event.target.parentElement;
        var textBoxValue = parentEl.querySelector('.description').value;
        var keySet = parentEl.querySelector('.description').id;

        localStorage.setItem(keySet, textBoxValue);
    });
};