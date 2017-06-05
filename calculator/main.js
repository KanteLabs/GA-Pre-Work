var row1 = 0,
    row2 = 0,
    row3 = 0,
    row4 = 0,
    row5 = 0,
    row6 = 0,
    row7 = 0,
    row8 = 0,
    row9 = 0;

var firstVal = 0,
    secondVal = 0,
    totalSum = 0;

function counter1(event){
    name = (event);
    abacus = document.getElementById(name)
    current_val = document.getElementById("current_val")
    if(abacus.className === "abacus_circle clicked"){
        abacus.className = "abacus_circle";
        row1 = row1 - 1;
        current_val.innerHTML = row1;
        console.log(row1);
    }else if(abacus.className === "abacus_circle"){
        abacus.className += " clicked";
        row1 = row1 + 1;
        current_val.innerHTML = row1;
        console.log(row1);
    }
   
}

function menuControl(event){
    name = (event);
    if(name == "clear"){
        abacus = document.getElementsByClassName("abacus_circle clicked")
        current_val = document.getElementById("current_val")
        current_val.innerHTML = 0;
        row1 = 0;
        console.log(row1)
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                    for(var l = 00; l < abacus.length; l++){
                    abacus[l].className = "abacus_circle"
                    }
                }
            }
        }
    }else if(name=="populate"){
        abacus = document.getElementsByClassName("abacus_circle")
        current_val = document.getElementById("current_val")
        row1 = abacus.length;
        current_val.innerHTML = row1;
        console.log(row1)
        for(var k = 00; k < abacus.length; k++){
            abacus[k].className = "abacus_circle clicked"
        }
    }else if(name=="row_add"){
        abacus = document.getElementsByClassName("abacus_circle")
        current_val = document.getElementById("current_val")
        row1 = 9;
        console.log(row1)
        for(var k = 00; k < row1; k++){
            abacus[k].className = "abacus_circle clicked"
            current_val.innerHTML = row1;
        }
    }else if(name=="row_add2"){
        abacus = document.getElementsByClassName("abacus_circle")
        current_val = document.getElementById("current_val")
        row1 = 18;
        console.log(row1)
        for(var k = 00; k < row1; k++){
            abacus[k].className = "abacus_circle clicked"
            current_val.innerHTML = row1;
        }
    }else if(name=="row_add3"){
        abacus = document.getElementsByClassName("abacus_circle")
        current_val = document.getElementById("current_val")
        row1 = 36;
        console.log(row1)
        for(var k = 00; k < row1; k++){
            abacus[k].className = "abacus_circle clicked"
            current_val.innerHTML = row1;
        }
    }else if(name=="row_add4"){
        abacus = document.getElementsByClassName("abacus_circle")
        current_val = document.getElementById("current_val")
        row1 = 45;
        console.log(row1)
        for(var k = 00; k < row1; k++){
            abacus[k].className = "abacus_circle clicked"
            current_val.innerHTML = row1;
        }
    }else if(name=="save"){
        abacus = document.getElementsByClassName("abacus_circle clicked");
        first_val = document.getElementById("first_val");
        current_val = document.getElementById("current_val")
        current_val.innerHTML = 0;
        firstVal = abacus.length;
        first_val.innerHTML = firstVal;
        console.log(firstVal)
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                    for(var l = 00; l < abacus.length; l++){
                    abacus[l].className = "abacus_circle"
                    }
                }
            }
        }
    }else if(name=="add"){
        abacus = document.getElementsByClassName("abacus_circle clicked");
        second_val = document.getElementById("second_val");
        current_val = document.getElementById("current_val")
        current_val.innerHTML = 0;
        secondVal = abacus.length;
        second_val.innerHTML = secondVal;
        console.log(secondVal);
        totalSum = secondVal+firstVal;
        final_val = document.getElementById('final_val');
        final_val.innerHTML = totalSum;
        console.log(totalSum);
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                    for(var l = 00; l < abacus.length; l++){
                    abacus[l].className = "abacus_circle"
                    }
                }
            }
        }
    }else if(name=="minus"){
        abacus = document.getElementsByClassName("abacus_circle clicked")
        second_val = document.getElementById("second_val");
        current_val = document.getElementById("current_val")
        current_val.innerHTML = 0;
        secondVal = abacus.length;
        second_val.innerHTML = secondVal;
        console.log(secondVal);
        totalSum = (firstVal-secondVal);
        final_val = document.getElementById('final_val');
        final_val.innerHTML = totalSum;
        console.log(totalSum);
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                    for(var l = 00; l < abacus.length; l++){
                    abacus[l].className = "abacus_circle"
                    }
                }
            }
        }
    }else if(name=="multiply"){
        abacus = document.getElementsByClassName("abacus_circle clicked")
        second_val = document.getElementById("second_val");
        current_val = document.getElementById("current_val")
        current_val.innerHTML = 0;
        secondVal = abacus.length;
        second_val.innerHTML = secondVal;
        console.log(secondVal);
        totalSum = (firstVal*secondVal);
        final_val = document.getElementById('final_val');
        final_val.innerHTML = totalSum;
        console.log(totalSum);
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                    for(var l = 00; l < abacus.length; l++){
                    abacus[l].className = "abacus_circle"
                    }
                }
            }
        }
    }else if(name=="divide"){
        abacus = document.getElementsByClassName("abacus_circle clicked")
        second_val = document.getElementById("second_val");
        current_val = document.getElementById("current_val")
        current_val.innerHTML = 0;
        secondVal = abacus.length;
        second_val.innerHTML = secondVal;
        console.log(secondVal);
        totalSum = (firstVal/secondVal);
        final_val = document.getElementById('final_val');
        final_val.innerHTML = totalSum;
        console.log(totalSum);
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                    for(var l = 00; l < abacus.length; l++){
                    abacus[l].className = "abacus_circle"
                    }
                }
            }
        }
    }else if(name=="avg"){
        abacus = document.getElementsByClassName("abacus_circle clicked")
        second_val = document.getElementById("second_val");
        current_val = document.getElementById("current_val")
        current_val.innerHTML = 0;
        secondVal = abacus.length;
        second_val.innerHTML = secondVal;
        console.log(secondVal);
        totalSum = ((firstVal+secondVal)/2);
        final_val = document.getElementById('final_val');
        final_val.innerHTML = totalSum;
        console.log(totalSum);
        for(var i = 00; i < abacus.length; i++){
            abacus[i].className = "abacus_circle"
            for(var j = 00; j < abacus.length; j++){
                abacus[j].className = "abacus_circle"
                for(var k = 00; k < abacus.length; k++){
                    abacus[k].className = "abacus_circle"
                    for(var l = 00; l < abacus.length; l++){
                    abacus[l].className = "abacus_circle"
                    }
                }
            }
        }
    }
}
