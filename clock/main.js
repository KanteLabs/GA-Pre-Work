var set_hour,
    set_min,
    set_seconds,
    set_am_pm;

var progressBar,
    progressBar_hour,
    progressBar_min,
    progressBar_sec,
    hour_val,
    min_val,
    sec_val;

function checkVal(object){
    if (object.value.length > object.max.length)
      object.value = object.value.slice(0, object.max.length)
}

function setAlarm(){
    set_hour = document.getElementById("set_hour").value;
    set_min = document.getElementById("set_min").value;
    set_am_pm = document.getElementById("set_am_pm").value;
    console.log(set_hour, set_min, set_am_pm)

    setDate.call(this, set_hour, set_min, set_am_pm)

}

function setDate(set_hour, set_min, set_am_pm){
 var now = new Date();
 var seconds = now.getSeconds();
 var secondsDegress = ((seconds / 60) * 6000);
 var minutes = now.getMinutes();
 var minutesDegress = ((minutes / 60) * 6000);
 var hours = now.getHours();
 var hoursDegress = (hours * 100) - 100; 

    if(hours>=13){
        hours = hours-12;
    }

    progressBar_hour = document.getElementById("hour_bar");
    progressBar_min = document.getElementById("min_bar");
    progressBar_sec = document.getElementById("sec_bar");

    hour_val = document.getElementById("hour_val");
    min_val = document.getElementById("min_val");
    sec_val = document.getElementById("sec_val");
    

    progressBar_hour.value = hours;
    progressBar_min.value = minutes;
    progressBar_sec.value = seconds;

    hour_val.innerHTML = hours;
    min_val.innerHTML = minutes;
    sec_val.innerHTML = seconds;

    if(set_hour==hours && set_min==minutes && set_am_pm=="am"){
        console.log("alarm");
    }else if(set_hour==hours && set_min==minutes && set_am_pm==="pm"){
        console.log("pm alarm");
    }

}

setInterval(setDate, 1000);