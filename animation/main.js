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
            lines[i].style.left = Math.random() * 250 + "px";
            lines[i].style.top = Math.random() * 250 + "px";
            lines[i].style.fontSize = Math.random() * 42 + 'px';
            lines[i].style.color = "rgba(255, 255, 255," + Math.random()+")";
            lines[i].style.transition = "all " + Math.random() * 1.8 +"s";
        }
    }
}
function clear_text(){
    var input_text =document.getElementById("input_text");
    var text = input_text.value;

    input_text.value = " ";
    input_text.innerHTML = " ";
    input_text.textContent = " ";
    text = " ";

}