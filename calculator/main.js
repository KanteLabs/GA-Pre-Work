var row1 = 0;
function counter1(event){
    name = event.target.name;
    console.log(name);
    abacus = document.getElementsByName(name)
    abacus.className += " clicked";
    row1+=1;
    console.log(row1)
}