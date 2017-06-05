var set_hour,
    set_min,
    set_seconds,
    set_am_pm;

function setAlarm(){
    set_hour = document.getElementById("set_hour").value;
    set_min = document.getElementById("set_min").value;
    set_seconds = document.getElementById("set_seconds").value;
    set_am_pm = document.getElementById("set_am_pm").value;

    console.log(set_hour, set_min, set_seconds, set_am_pm)
}