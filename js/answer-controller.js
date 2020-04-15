'use strict'

function onLoadAdresss() {
    getAdress(renderAddress)
}

function renderAddress(adresss) {
    
    var strHtmls = adresss.map(address => {

        return `<div class="person">
        <h1>${address.fname},${address.lname}</h1>
        <div class="info">
        <img src="https://api.adorable.io/avatars/120/${address.fname}.png" alt="">
        <table>
        <tr>
            <td>tel:</td>
            <td>${address.tel}</td>
        </tr>
        
        <tr>
            <td>adress:</td>
            <td>${address.address}</td>
        </tr>
        <tr>
        <td>city:</td>
        <td>${address.city}</td>
        </tr>
        <tr>
        <td>state:</td>
        <td>${address.state}</td>
        </tr>
        <tr>
        <td>zip:</td>
        <td>${address.zip}</td>
        </tr>
        </table>
        </div>
        </div>`

    })
    
    document.querySelector('.adress-container').innerHTML = strHtmls.join('')
}