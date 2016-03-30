/**
* Created with pomodoro-timer.
* User: Misacorp
* Date: 2016-03-29
* Time: 05:15 PM
* To change this template use Tools | Templates.
*/

var timer = document.getElementById("timer");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var durationSlider = document.getElementById("durationSlider");

var timerRunning = false;       // make stuff work with this instead of all the ugly tricks in place!

var counter;
var duration = durationSlider.value;
var timeLeft = duration;

//  STATS
var timersStarted = 0;
var secondsTimed = 0;

var startTimer = function() {
    timersStarted++;
    document.getElementById("timersStarted").innerHTML = timersStarted;
    switchButtons("start","stop");
    if(timeLeft > 0) {
        counter = setInterval(countdown,1000);      //  Sets timer loop to run once every second
        console.log("Started timer");
        }
    else {
        console.log("Timer at 0. Please reset.");
    }
    };

var stopTimer = function() {
    switchButtons("start","stop");
    console.log("Stopped timer");
    clearInterval(counter);
    };
    
var resetTimer = function() {
    console.log("Reset timer");
    clearInterval(counter);
    switchButtons("start","stop");
    duration = durationSlider.value;
    timeLeft = duration;
    timer.innerHTML = timeLeft;
};
    
function countdown() {
    timeLeft--;
    secondsTimed++;
    document.getElementById("secondsTimed").innerHTML = secondsTimed;
    console.log(timeLeft);
    if(timeLeft <= 0) {
        console.log("Time's up!");
        stopTimer();
        }
    timer.innerHTML = timeLeft;
    }
    
function switchButtons(id1,id2) {
       var e1 = document.getElementById(id1);
       var e2 = document.getElementById(id2);
       if(e1.style.display == 'none') {
           e1.style.display = 'block';
           e2.style.display = 'none';
           }
       else {
           e1.style.display = 'none';
           e2.style.display = 'block';
            } 
    }


/*  -----------------------------  */


start.onclick = function() {
    startTimer();
    };

stop.onclick = function() {
    stopTimer();
    };

reset.onclick = function() {
    resetTimer();
    };

durationSlider.oninput = function updateTimer() {
    timer.innerHTML = durationSlider.value;
};

durationSlider.onchange = function updateDuration() {
    duration = durationSlider.value;
    timeLeft = duration;
};

window.onload = function yolo() {
    timer.innerHTML = durationSlider.value;
};