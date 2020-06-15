$(document).ready(function () {
    // CAROUSEL
    $('#myCarousel').carousel({
        interval: 5000,
        cycle: true
    });

    // ADD TO CART
    var currentItems = 0;
    $(".add-to-cart").click(function () {
        currentItems++;
        $(".cart-badge").text(currentItems);
    });

    //   FORM VALIDATION
    $("form.needs-validation").submit(function (event) {
        event.preventDefault();

        $("form.needs-validation").removeClass('needs-validation').addClass('was-validated');
    })

    // CHECKBOX BILLING SAME
    $('#check-same').click(function () {
        if ($('#check-same').is(':checked')) {
            $('#firstName-billing').val($('#firstName').val());
            $('#lastName-billing').val($('#lastName').val());
            $('#email-billing').val($('#email').val());
            $('#inputAddress-billing').val($('#inputAddress').val());
            $('#inputAddress2-billing').val($('#inputAddress2').val());
            $('#inputCountry-billing').val($('#inputCity').val());
            $('#inputZip-billing').val($('#inputZip').val());
            var state = $('#inputState option:selected').val();
            $('#inputState-billing option[value=' + state + ']').attr('selected', 'selected');
        } else {
            //Clear on uncheck
            $('#firstName-billing').val("");
            $('#lastName-billing').val("");
            $('#email-billing').val("");
            $('#inputAddress-billing').val("");
            $('#inputAddress2-billing').val("");
            $('#inputCountry-billing').val("");
            $('#inputZip-billing').val("");
            $('#inputState-billing option[value=""]').attr('selected', 'selected');
        };
    });

    // BLOG COLLAPSE
    $('.collapse').collapse('hide') 

        $(".toggle-btn").click(function(){
            $("#myCollapsible").collapse('toggle');
        });


});