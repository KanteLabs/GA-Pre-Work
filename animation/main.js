function move_text(){
    var input_text =document.getElementById("input_text");
    var text_viewer = document.getElementById("text_viewer");
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
            lines[i].style.left = Math.random() * 250 + "px";
            lines[i].style.top = Math.random() * 250 + "px";
        }
    }
}
