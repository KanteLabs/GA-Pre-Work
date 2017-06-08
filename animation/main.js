function move_text(){
    var input_text =document.getElementById("input_text");
    var text = input_text.value;
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
            lines[i].style.left = Math.random() * 350 + "px";
            lines[i].style.top = Math.random() * 350 + "px";
            lines[i].style.fontSize = Math.random() * 50 + 'px';
            lines[i].style.color = "rgba(255, 255, 255," + Math.random()+")";
            lines[i].style.transition = "all " + Math.random() * 7 +"s";
        }
    }
}
function key_trigger(e){
    var keyValue = e.keyCode;
    if(keyValue == "13" || keyValue == "32"){
        move_text();
    }
}