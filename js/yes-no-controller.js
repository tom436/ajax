
function onGetAnswer(ev){

    var question=ev.value;
    if(question.length>=4&&question.charAt(question.length-1)==='?'){
        document.querySelector('.game h3').hidden = false
        document.querySelector('.game div').hidden = true
        document.querySelector('.result-area h2').hidden=true
        document.querySelector('.result-area img').hidden=true

        
        document.querySelector('.question').value='';


        getAnswer(renderAnswer)
    } 
    else alert("ask a yes no question")
    
}

function renderJoke(joke){
    document.querySelector('.result-area h2').innerText=joke.value.joke;
    document.querySelector('.result-area h2').hidden=false


}
function renderDog(dog){
    document.querySelector('.result-area img').src=dog.message;
    document.querySelector('.result-area img').hidden=false

}

function renderAnswer(ans){
    document.querySelector('.game h2').innerText=ans.answer;
    document.querySelector('.game img').src=ans.image;

}
function onImageReady(){
    document.querySelector('.game div').hidden = false

    document.querySelector('.game h3').hidden = true

}