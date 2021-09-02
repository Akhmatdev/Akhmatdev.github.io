const slides = document.querySelectorAll(".slide")

for(const slide of slides){
    slide.addEventListener('click', () =>{
        slide.classList.add('active')
        deleteActive()
        slide.classList.add('active')
    })
}

function deleteActive(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
        })
}
