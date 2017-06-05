var progressBar;
progressBar = document.getElementById("timer");

function startTimer(){
    for(var i=0; i<100; i++){
        progressBar.value += i;
        console.log(progressBar.value)
    }
}

startTimer()