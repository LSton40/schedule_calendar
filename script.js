var day = moment().format('dddd');
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var timeNow = moment().format('LT');
var hour = moment().hour();

var todaysDate = document.querySelector('#currentDay');
var hourBlock = document.querySelectorAll('.hour');
var textTime = document.querySelectorAll('.description');

var timeDay = document.querySelectorAll('.time-block');

var saveBtn = document.querySelectorAll('.saveBtn');

todaysDate.innerText = day + ', ' + date;



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


// function vanilly() {
for (i=0; i < textTime.length; i++) {

    // textTime[i].value = vanilly();
    // var key = i;

    // localStorage.getItem(key)
    // if (key !== null) {
        // var textBox = textTime[i].value;
        // textBox = localStorage.getItem(key);
    // }

    saveBtn[i].addEventListener('click', function(event) {
        event.preventDefault();
        

        
        var parentEl = event.target.parentElement;
        var textBoxValue = parentEl.querySelector('.description').value;

        var key = parentEl.querySelector('.description').id;
        console.log(key);


        localStorage.setItem(key, textBoxValue);
        
        // var storage = localStorage.getItem(key);
        
        // textBoxValue = localStorage.getItem(key);
        // console.log(textBox)
        // return textBox;

        
        return key;
        // return storage;
    });

    // var callUp = function() {
    //     localStorage.getItem(key);
    // };

    // textBoxValue = callUp();
    // if (i === key) {
    //     textBoxValue = localStorage.getItem(key);
    // }

    // if (i == key) {

    //     console.log(textTime[i]);
    //     textTime[i].value = localStorage.getItem(key);
    // }
};
// }

for (i=0; i < textTime.length; i++) {

    // function assignVal(event) {
        var key;
        localStorage.getItem(key);

        if (textTime[i].id == key)
    // var parentEl = event.target.parentElement;
    // var textBoxValue = parentEl.querySelector('.description').value;
    // var key = parentEl.querySelector('.description').id;

    
    textTime[i].value = localStorage.getItem(key);
    
// }
};
// for (i=0; i < textTime.length; i++) {

//     if (textTime[i] == key) {
//         textTime[i].value = localStorage.getItem(key);
//     }
// };



