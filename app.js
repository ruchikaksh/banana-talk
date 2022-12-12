var btnTranslate=document.querySelector("#btn-translate");
var txtinput = document.querySelector("#txt-buttn");
var outputDiv = document.querySelector("#output");
// console.log(btnTranslate);
var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslation(text){
    return serverUrl + "?" + "text=" + text
};
function errorHandler(){
    console.log("error occurred ",error);
}
function clickHandler(txtinput){
    var inputxt = txtinput.value;

fetch(getTranslation(inputxt))
    .then(response=> response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerHTML = translatedText;
    })
    .catch(errorHandler)
};



btnTranslate.addEventListener("click",clickHandler)
    