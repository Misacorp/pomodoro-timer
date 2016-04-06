var blue_orange = "https://code.getmdl.io/1.1.3/material.blue-orange.min.css";
var brown_purple = "https://code.getmdl.io/1.1.3/material.brown-purple.min.css";

var currentTheme = "blue_orange";

var blue_orange_button = document.getElementById("option-1");
var brown_purple_button = document.getElementById("option-2");

//  Chrome desktop notification support
function notifyMe() {
    if (!Notification) {
        alert('Desktop notifications not available in your browser. Try Chromium.'); 
        return;
    }
    
    var notification;
    
    if(canNotify) {
        if (Notification.permission !== "granted")
            Notification.requestPermission();
        else {
            notification = new Notification('Timer ended!', {
            icon: 'http://i.imgur.com/kvO3azi.gif',
            body: "Best regards: Bilbo Baggins, Yolo Swaggins and Pete.",
            });

            playSound("headshot_MP3");
            }
        }
    
        notification.onclick = function () {
            window.focus();
            };
    }

//  Notification sound
function playSound(filename){   
                document.getElementById("sound").innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg" /><source src="' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3" /></audio>';
    }
    
function swapStyleSheet(sheet){
    console.log("Swapping stylesheet to " + sheet);
	document.getElementById('pagestyle').setAttribute('href', sheet);
}

blue_orange_button.onclick = function() {               //  Scale this to support an arbitrary number of buttons before continuing!
    if(currentTheme != "blue_orange")   {
        swapStyleSheet(blue_orange);
        currentTheme = "blue_orange";
        }
    };

brown_purple_button.onclick = function() {              //  Scale this to support an arbitrary number of buttons before continuing!
    if(currentTheme != "brown_purple")  {
        swapStyleSheet(brown_purple);
        currentTheme = "brown_purple";
        }
};