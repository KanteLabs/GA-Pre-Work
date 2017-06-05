var set_hour,
    set_min,
    set_seconds,
    set_am_pm;

var progressBar,
    progressBar_hour,
    progressBar_min,
    progressBar_sec,
    progressBar_ms;

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
 var ms = now.getMilliseconds();
 var seconds = now.getSeconds();
 var secondsDegress = ((seconds / 60) * 6000);
 var minutes = now.getMinutes();
 var minutesDegress = ((minutes / 60) * 6000);
 var hours = now.getHours();
 var hoursDegress = (hours * 100) - 100; 

    progressBar_hour = document.getElementById("hour_bar");
    progressBar_min = document.getElementById("min_bar");
    progressBar_sec = document.getElementById("sec_bar");
    progressBar_ms = document.getElementById("ms_bar");

    progressBar_hour.value = hours;
    progressBar_min.value = minutes;
    progressBar_sec.value = seconds;
    progressBar_ms.value = new Date();

}

setInterval(setDate, 1000);