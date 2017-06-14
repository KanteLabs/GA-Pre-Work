var emoji, splittedKeywords = [];

var oReq = new XMLHttpRequest();
oReq.onload = reqListener;
oReq.open("get", "./js/emoji.json", true);
oReq.send();

function reqListener(e) {
    emoji = JSON.parse(this.responseText);
}

function splitInputText(){
    console.log('Text received and splitting');
    text = document.getElementById('input_text').value;
    text = text.split(' ');
    splitKeywords();
    function splitKeywords(){
        for(var i = 0; i<emoji.length; i++){
            splittedKeywords.push(emoji[i].keywords.split(' | '));
        }
        compareText.call(this, text, splittedKeywords)
    }
    console.log(text);
    console.log('sending text to emoji comparer');
    compareText.call(this, text, splittedKeywords);
}

function compareText(text, splittedKeywords){
    splittedKeywords = splittedKeywords;
    console.log(splittedKeywords);
    console.log("Compare received text")
    for(var i = 0; i<text.length; i++){
        if(splittedKeywords[0][0].includes(text[i])){
            console.log(true)
        }
    }
}

function textToEmoji(){
    console.log("Sending Text");
    splitInputText()
    
}