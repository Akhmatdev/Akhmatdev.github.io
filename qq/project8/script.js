$(document).ready(function () {

    let randomColor = Math.round(Math.random() * 255);
    let randomNumber = "rgb(" + randomNumber + "," + randomNumber + "," + randomNumber + ")";

    $(".item").on("click" , function(){
        let elemId = $(this).attr("id");
        $("body").css("background-color", elemId);
        $("h1").text("цвет страницы " + elemId).css("text-align","center");
        console.log(elemId);
    })

    $("#img").on("click", function () {
        $("body").css({
                "background" : "url(./img/column-img.jpg)",
                "background-size" : "cover",
                "background-repeat" : "no-repeat",
        }
        );
    })

    $(".randomColor").on("click", function () {
       let randomColor = Math.round(Math.random() * 255);
       let randomNumber = "rgb(" + randomNumber + "," + randomNumber + "," + randomNumber + ")";
       $("body").css("background-color", randomColor);
       $("h1").text("цвет страницы случыйный");
       console.log(randomColor)
   })

})

