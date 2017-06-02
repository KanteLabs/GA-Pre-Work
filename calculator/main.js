var row1 = 0,
    row2 = 0,
    row3 = 0,
    row4 = 0,
    row5 = 0,
    row6 = 0,
    row7 = 0,
    row8 = 0,
    row9 = 0;

function counter1(event){
    name = (event);
    abacus = document.getElementById(name)
    if(abacus.className === "abacus_circle clicked"){
        abacus.className = "abacus_circle";
        row1 = row1 - 1;
        console.log(row1);
    }else if(abacus.className === "abacus_circle"){
        abacus.className += " clicked";
        row1 = row1 + 1;
        console.log(row1);
    }
}

function menuControl(event){
    name = (event);
    abacus = document.getElementsByClassName("abacus_circle clicked")
    if(name == "clear"){
        row1 = 0;
        console.log(row1)
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                }
            }
        }
    }
}