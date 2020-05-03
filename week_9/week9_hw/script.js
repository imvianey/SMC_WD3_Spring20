$(document).ready(function () {

    $('.rotate').hover(function() {
        var a = Math.random() * -40 - 1;
        $(this).css('transform', 'rotate(' + a + 'deg)');
    }, function() {
        $(this).css('transform', 'none');
    });

});