var day = moment().format('dddd');
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var timeNow = moment().format('LT');
// var dateTemp = new Date();
// var hour = dateTemp.getHours();

var hour = moment().hour();


// console.log(hour2);

var todaysDate = document.querySelector('#currentDay');
var hourBlock = document.querySelectorAll('.hour');
var textTime = document.querySelectorAll('.description');

var saveBtn = document.querySelectorAll('.saveBtn');

// var hourVal = hourBlock.id;

console.log(todaysDate.id);

var timeDay = document.querySelectorAll('.time-block');

todaysDate.innerText = day + ', ' + date;



for (i=0; i < hourBlock.length; i++) {
    var hourVal = hourBlock[i].id;
    if (hourVal > hour) {
        textTime[i].classList.add('future');
        // textTime[i].classList.remove('past');
        // textTime[i].classList.remove('present');
    } 
    else if (hourVal == hour) {
        textTime[i].classList.add('present');
        // textTime[i].classList.remove('past');
        // textTime[i].classList.remove('future');
    } else {
        textTime[i].classList.add('past');
        // textTime[i].classList.remove('present');
        // textTime[i].classList.remove('future');
    }

};


// var userBox = document.querySelector('#hank');
// var btn = document.querySelector('#larry');

// btn.addEventListener('click', function (event) {
//     event.preventDefault();
    
//     localStorage.setItem('wombat', userBox.value);
  

// });

for (i=0; i < textTime.length; i++) {
    
    
    var key = 'agenda' + i;

    // textTime[i].value = localStorage.getItem(key);

    
    

    // console.log(key);

    saveBtn[i].addEventListener('click', function (event) {
    event.preventDefault();
    var textBox = textTime[i].value;
    for (i=0; i < saveBtn.length; i++) {
        
    localStorage.setItem(key, textBox);
    
}
    
    // localStorage.getItem(key);
    // console.log(textBox)
    // return textBox;
});

};
