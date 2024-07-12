var d = new Date(); // for now9
var minutes = d.getMinutes(); // =>  30
var hours = d.getHours();
var seconds; // Declare seconds
var header = document.getElementById("time");

hours -= 12;

if (minutes < 10) {
    minutes = String(minutes);
    minutes = "0" + minutes;
}

const time = ["", ":", ""];
time[0] = hours;
time[2] = minutes;

function updateTime() {
    let timeString = time.join("");
    header.innerHTML = timeString;
}
updateTime();

function expandBtn() {
    let expandible_button = document.getElementById("expandibleButton");

    
    expandible_button.style.animation = 'none';


    expandible_button.offsetWidth; // Trigger reflow

    
    expandible_button.style.animation = 'spinButton 1s ease-in-out';
}
