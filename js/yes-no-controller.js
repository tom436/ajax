
function onGetAnswer(ev){

    var question=ev.value;
    if(question.length>=4&&question.charAt(question.length-1)==='?'){
        document.querySelector('.game h3').hidden = false
        document.querySelector('.game div').hidden = true
        console.log(question);
        
        document.querySelector('.question').value='';


        getAnswer(renderAnswer)
    } 
    else alert("ask a yes no question")
    
}

function renderAnswer(ans){
    document.querySelector('.game h2').innerText=ans.answer;
    document.querySelector('.game img').src=ans.image;
    document.querySelector('.game div').hidden = false

    document.querySelector('.game h3').hidden = true

}