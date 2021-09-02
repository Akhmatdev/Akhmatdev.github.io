$(document).ready(function () {
    let x = $(document).width();
    let y = $(document).height();
    console.log(y)
    $(".shape").on("click", function () {
        let randomPosX = Math.round(Math.random() *x);
        let randomPosY = Math.round(Math.random() *x);
        $(this).css({
            "top": randomPosY,
            "left": randomPosX,
        })
    })
})