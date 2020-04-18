$(document).ready(function () {

    // INDEX SCROLL BUTTON D-NONE
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#eaten').addClass('invisible');
        } else {
            $('#eaten').removeClass('invisible');
        }
    });

    // CAROUSEL
    $('#myCarousel').carousel({
        interval: 7000
    });

    $('#carouselControl').click(function () {

        if ($('#carouselControl').hasClass('paused')) {
            $('#myCarousel').carousel('cycle');
            $('#carouselControl').text('Pause');
        } else {
            $('#myCarousel').carousel('pause');
            $('#carouselControl').text('Play');
        }

        $('#carouselControl').toggleClass('paused');
    });


   // MODAL TIMER 6 SECOND DELAY
    function show_modal() {
        $('#exampleModal').modal();
    }
    window.setTimeout(show_modal, 6000);

    // SCROLL IMAGE TRAVELS HORIZONTALLY
    $(window).on("load resize scroll", function () {
        $(".bg-static").each(function () {
            var windowTop = $(window).scrollTop();
            var elementTop = $(this).offset().top;
            var leftPosition = windowTop - elementTop;
            $(this)
                .find(".bg-move")
                .css({
                    right: leftPosition
                });
        });
    });

    // Hover over Team
    $(".person1").hover(function () {
        $(this).attr("src", "assets/team/person1-hover.png");
    }, function () {
        $(this).attr("src", "assets/team/person1.jpeg");
    });

    $(".person2").hover(function () {
        $(this).attr("src", "assets/team/person2-hover.png");
    }, function () {
        $(this).attr("src", "assets/team/person2.jpeg");
    });

    $(".person3").hover(function () {
        $(this).attr("src", "assets/team/person3-hover.png");
    }, function () {
        $(this).attr("src", "assets/team/person3.jpeg");
    });

    $(".person4").hover(function () {
        $(this).attr("src", "assets/team/person4-hover.png");
    }, function () {
        $(this).attr("src", "assets/team/person4.jpeg");
    });

});