/*
  _____                          ______       _                       _               
 |  __ \                        |  ____|     | |                     (_)              
 | |  | | ___ _ __ _ __  _   _  | |__   _ __ | |_ ___ _ __ _ __  _ __ _ ___  ___  ___ 
 | |  | |/ _ \ '__| '_ \| | | | |  __| | '_ \| __/ _ \ '__| '_ \| '__| / __|/ _ \/ __|
 | |__| |  __/ |  | |_) | |_| | | |____| | | | ||  __/ |  | |_) | |  | \__ \  __/\__ \
 |_____/ \___|_|  | .__/ \__, | |______|_| |_|\__\___|_|  | .__/|_|  |_|___/\___||___/
                  | |     __/ |                           | |                         
                  |_|    |___/                            |_|                
MIT License
Github: https://github.com/ohlookitsderpy/derpyenterprises.org
*/
var egg = new Egg("up,up,down,down,left,right,left,right,b,a", function () { //why are you looking here, you ruined the easter egg >:(
    var uwu = new Audio('assets/audio/kirbe.ogg');
    uwu.play();
    alert("konami code activated, click ok to enable kirbe mode");
    document.body.style.background = "url('assets/img/kirby.jpg')";
    document.body.style.color = "white";
    document.title = "kirbe mode enabled";
    document.getElementById("icon").src = "assets/img/kirby.gif";
    document.getElementById("titletext").innerHTML = "Kirby <3";
    document.getElementById("e").innerHTML = "Enjoyed this Easter egg? Star this repo on GitHub <a href='https://github.com/ohlookitsderpy/derpyenterprises.org' target=_blank'>here</a>!";
    document.getElementById("o").innerHTML = "The page will automatically refresh once the song is over!"
    document.getElementById("uwu").style.display = "none";
    uwu.onended = function() {
        location.reload();
    };
}).listen();