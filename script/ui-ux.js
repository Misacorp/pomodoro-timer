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