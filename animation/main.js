function move_text(){
    var input_text = document.getElementById("input_text");
    var form_body = document.getElementById("form_body");
    var text = input_text.value;
    form_body.style.display = "none";
    text = text.split(" ");

    for(var i = 0; i <text.length; i++){
        var line = document.createElement("p");
        line.className = "line";
        document.body.appendChild(line);

        var lines = document.getElementsByClassName("line");
        lines[i].innerHTML = text[i] + " ";
        if(i==text.length-1){
            move(lines);
        }
    }

    function move(lines){
        for(var i = 0; i<lines.length; i++){
            lines[i].style.left = Math.random() * 300 + "px";
            lines[i].style.top = Math.random() * 350 + "px";
            lines[i].style.fontSize = Math.random() * 70 + 'px';
            lines[i].style.color = "rgba(255, 255, 255," + Math.random()+")";
            lines[i].style.transition = "all 2.5s";
        }
    }
}

function key_trigger(e){
    var keyValue = e.keyCode;
    if(keyValue == "13" || keyValue == "32"){
        move_text();
    }
}