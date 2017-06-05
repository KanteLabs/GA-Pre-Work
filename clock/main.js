var set_hour,
    set_min,
    set_seconds,
    set_am_pm;

var progressBar;

function checkVal(object){
    if (object.value.length > object.max.length)
      object.value = object.value.slice(0, object.max.length)
}

function setAlarm(){
    set_hour = document.getElementById("set_hour").value;
    set_min = document.getElementById("set_min").value;
    set_seconds = document.getElementById("set_seconds").value;
    set_am_pm = document.getElementById("set_am_pm").value;

    console.log(set_hour, set_min, set_seconds, set_am_pm)
}

function setDate(){
 var now = new Date();
 var seconds = now.getSeconds();
 var secondsDegress = ((seconds / 60) * 6000);
 var minutes = now.getMinutes();
 var minutesDegress = ((minutes / 60) * 6000);
 var hours = now.getHours();
 var hoursDegress = (hours * 100) - 100; 

    progressBar = document.getElementById("timer");
    progressBar.value = seconds;

}

setInterval(setDate, 1000);