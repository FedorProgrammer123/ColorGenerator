let button = document.querySelector('button')
let span = document.querySelector('span')
let hexColor = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
button.addEventListener('click',function(){
    let hex = getHex()
    document.body.style.backgroundColor = hex
    span.textContent = hex
})
function getHex(){
    let hex = '#'
    for(let i = 0; i < 6; i++){
        hex += hexColor[getRandom()]
    }
    return hex
}
function getRandom(){
    return Math.floor(Math.random() * hexColor.length)
}