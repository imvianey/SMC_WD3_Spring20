$(document).ready(function () {
    // CAROUSEL
    $('#myCarousel').carousel({
        interval: 5000,
        cycle: true
    });

    // ADD TO CART
    var currentItems = 0;
       $(".add-to-cart").click(function(){
           currentItems++;
           $(".cart-badge").text(currentItems);
       });
});