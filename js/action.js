

var btn = document.getElementById("years");
var Anemat = document.getElementById("card_1");

var btn2 = document.getElementById("month");
var Anemat2 = document.getElementById("card_2");
function Scal() {

    Anemat.style.transform = "scale(1.1)";

}



// Start section Testimonial 
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        // margin: 5,
        navText: ['<i class="fa-solid fa-arrow-left-long Tired_r"></i>', '<i class="fa-solid fa-arrow-right Tired_l"></i>'],

        loop:true,
        autoplay:true,
        responsive: {
            0: {
                items: 1,
            
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            }
        }


    });
});
// End section Testimonial 

// Start Button_Top_Fixed


$(document).ready(function () {
    $(window).scroll(function () {

        if ($(this).scrollTop() > 700) {

            $(".Button_Top_Fixed").fadeIn()
        } else {
            $(".Button_Top_Fixed").fadeOut()

        }


    })
})

$(".Button_Top_Fixed").click(function () {

    $("html,body").animate({

        scrollTop: 0

    }, 2000)
})
