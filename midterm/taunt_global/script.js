$(document).ready(function () {

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


// MODAL TIMER 8 SECOND DELAY
            function show_modal(){
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

});