function move_text(){
    var input_text =document.getElementById("input_text");
    var text_viewer = document.getElementById("text_viewer");
    var text = input_text.value;
    text = text.split(" ");
    console.log(text);

    for(var i = 0; i < text.length; i++){
        console.log(text[i])
        var line = document.createElement("p");
        line.className = "line";
        document.body.appendChild(line);

        var b = document.getElementsByClassName("line");
        b[i].innerHTML = text[i]
    }

}