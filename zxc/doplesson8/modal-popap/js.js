let closeBtn = document.querySelector('.close-btn')
let modalBtn = document.querySelector('.modal-btn')
let modal = document.querySelector('.modal')

modalBtn.onclick = function (){
    document.querySelector('.modal').style.display = 'block'
}
closeBtn.onclick = function (){
    document.querySelector('.modal').style.display = 'none'
}
window.onclick = function (e){
    if (e.target === modal){
        document.querySelector('.modal').style.display = 'none'
    }
}