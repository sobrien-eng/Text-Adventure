window.onload = function() {
    $('#loading').hide();
};

function signup() {
    $('#signup').hide();
    $('#login').hide();
    $('#loading').show();
    $("#username").attr('disabled','disabled');
    $("#password").attr('disabled','disabled');
    $("#email").attr('disabled','disabled');
    let settings = {
        "url": "https://wpcs.xyz/signup",
        "method": "POST",
        "timeout": 0,
        "data": {
            "username": $("#username").val(),
            "password": $("#password").val(),
            "email": $("#email").val()
        }
    };

    $.ajax(settings).done(function (response) {
        if (response === "OK") {
            sessionStorage.setItem('successful-signup', 1);
            location.replace("https://wpcs.xyz/login.html");
        }
    });
}