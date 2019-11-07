//  Jquery Script to confirm all the relavent text boxs on the form has been filled in and to alert the user if they have'nt

$('.btn2').click(function () {
    if (!$('#fname').val()) {
        $(".fname-error").css("visibility", "visible");
        $("#fname").css({
            "background": "url('images/icon-error.svg') no-repeat right 10px center"
        });
        return false;
    } else {
        $(".fname-error").css("visibility", "hidden");
        $("#fname").css("background", "none");
        return false;
    }

});

$('.btn2').click(function () {
    if (!$('#lname').val()) {
        $(".lname-error").css("visibility", "visible");
        $("#lname").css({
            "background": "url('images/icon-error.svg') no-repeat right 10px center"
        });
        return false;
    } else {
        $(".lname-error").css("visibility", "hidden");
        $("#lname").css("background", "none");
        return false;
    }
});

$('.btn2').click(function () {
    var regex = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/;
    var email = $("#email").val();
    if (!regex.test(email)) {
        $(".email-error").css("visibility", "visible");
        $("#email").css({
            "background": "url('images/icon-error.svg') no-repeat right 10px center"
        });
        return false;
    } else {
        $(".email-error").css("visibility", "hidden");
        $("#email").css("background", "none");
        $("#email").css("backgrond", "placholder");
        return false;
    }
});

$('.btn2').click(function () {
    if (!$('#password').val()) {
        $(".password-error").css("visibility", "visible");
        $("#password").css({
            "background": "url('images/icon-error.svg') no-repeat right 10px center"
        });
        return false;
    } else {
        $(".password-error").css("visibility", "hidden");
        $("#password").css("background", "none");
        return false;
    }
});