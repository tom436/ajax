'use strict'





function getAnswer(onSuccess){
    $.get('https://yesno.wtf/api',ans=>{

        if(ans.answer==='yes') getJoke(renderJoke) 
        else  getDog(renderDog)

        onSuccess(ans)
    })
}

function getJoke(onSuccess){
    $.get('http://api.icndb.com/jokes/random',onSuccess)
}

function getDog(onSuccess){
    $.get('https://dog.ceo/api/breeds/image/random',onSuccess)
}