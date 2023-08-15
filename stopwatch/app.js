// variables for button

const startStopBtn = document.querySelector('#startStopBtn')
const resetBtn = document.querySelector('#resetBtn')

// variable for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading 0s 
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for set interval and timer status

let timerInterval = null;
let timerStatus = 'stopped';

// stop watch function
function stopWatch(){

    seconds++

    if (seconds/60 === 1){
        seconds=0;
        minutes++;
        if (minutes/60 === 1){
            minutes = 0;
            hours ++;
        }
    }

    if (seconds < 10) {
        leadingSeconds = '0' + seconds.toString();
    }else {
        leadingSeconds = seconds;
    }
    if (minutes < 10) {
        leadingMinutes = '0' + minutes.toString();
    }else {
        leadingMinutes = minutes;
    }
    if (hours < 10) {
        leadingHours = '0' + hours.toString();
    }else {
        leadingHours = seconds;
    }


    let displayTimer = document.getElementById('timer');
    displayTimer.innerText = leadingHours+ ":" + leadingMinutes + ":" + leadingSeconds;
}


startStopBtn.addEventListener('click',function(){

    if (timerStatus === 'stopped') {
        // start the timer
        timerInterval = window.setInterval(stopWatch,1000);
        // change the button icon to a pause button
        document.getElementById('startStopBtn').innerHTML = `
        <i class="fa fa-pause fa-3x" id="pause"></i>`;
        // change timer status
        timerStatus = 'started';
    }else {
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `
        <i class="fa fa-play fa-3x" id="play"></i>`;
        timerStatus = 'stopped'
    }
})
// The global clearInterval() method cancels a timed, repeating 
// action which was previously established by a call to setInterval().
// If the parameter provided does not identify a previously 
// established action, this method does nothing.


// reset the timer
resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);

    // reset the seconds , minutes and hours variables
    seconds = 0;
    minutes = 0;
    hours = 0;

    // what to show on the page when i click the restart button
    document.getElementById('timer').innerHTML = "00:00:00";

})
