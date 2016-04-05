var timer = document.getElementById("timer");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");
var durationSlider = document.getElementById("durationSlider");

var timerRunning = false;       // make stuff work with this instead of all the ugly tricks in place!

var counter;
var duration = durationSlider.value * 60;
var timeLeft = duration;
var canNotify = false;

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
        canNotify = true;
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
    setDuration();
    timeLeft = duration;
    updateTimer(timeLeft);
};
    
function countdown() {
    timeLeft--;
    secondsTimed++;
    document.getElementById("secondsTimed").innerHTML = secondsTimed;
    console.log(timeLeft);
    if(timeLeft <= 0) {
        console.log("Time's up!");
        stopTimer();
        notifyMe();
        canNotify = false;
        }
    updateTimer(timeLeft);
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
    
function updateTimer(time) {
    var ret = time.toString().toHHMMSS();
    timer.innerHTML = ret;
    return ret;
    }
    
    
// Seconds to timecode functionality
String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var time    = hours+':'+minutes+':'+seconds;
    return time;
};
    
// request permission on page load
document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

function setDuration(dur) {
    if(dur !== undefined) {
        duration = dur;
        return;
    }
    else
        duration = durationSlider.value;
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
    // Using robust format to avoid call limit overflow
    timer.innerHTML = durationSlider.value.toString().toHHMMSS();
};

durationSlider.onchange = function updateDuration() {
    setDuration();
    timeLeft = duration;
    updateTimer(durationSlider.value);
};

window.onload = function yolo() {
    updateTimer(durationSlider.value);
};