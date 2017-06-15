//Controls the slide show
var SLIDE_INDEX = 1;
showDivs(SLIDE_INDEX);

function plusDivs(n){
    showDivs(SLIDE_INDEX += n);
};

function showDivs(n) {
    var i = 0;
    var x = document.getElementsByClassName("slides");
    if(n > x.length){SLIDE_INDEX = 1}
    if(n < 1){SLIDE_INDEX = x.length}
    while(i < x.length){
        x[i].style.display = "none";
        i++;
    }
    x[SLIDE_INDEX-1].style.display = "block";

};

//Dropdown for the menu for the different artist on the nav
function dropdown(){
    var drop_content = document.getElementById("drop_content");
    if(drop_content.className === "drop_content"){
        drop_content.className += " drop"
    }else{
        drop_content.className = "drop_content"
    }
};

//Drop down for the actual menu
function dropdownMenu(){
    var menu_content = document.getElementById("menu_content");
    if(menu_content.className === "menu_content"){
        menu_content.className += " drop"
    }else {
        menu_content.className = "menu_content"
    }
}

/*I modified W3CS school version of a modal to make it
more efficient instead of making a function for every modal which would require over (20 functions!), I decided
to grab the ID of the element that triggered the javasript function to run on a mouse click. This is stored in a name variable, which is passed to the getElementById statement.
 By this doing this I am able to open and close more than 20 different modals with just two functions. */
function modal_open(e){
    event.preventDefault();
    name = event.target.id ;
    console.log(name);
    document.getElementById(name+"_modal").style.height = "100%";
}
function modal_close(e) {
    event.preventDefault();
    name = event.target.id ;
    console.log(name);
    document.getElementById(name).style.height = "0%";
}
