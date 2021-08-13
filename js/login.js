window.onload = function() {
    $('#loading').hide();
    if(sessionStorage.getItem('successful-signup') === '1') {
        sessionStorage.removeItem('successful-signup');
        login(true);
    }
};

function login(magic) {
    $('#signup').hide();
    $('#login').hide();
    $('#loading').show();
    $("#username").attr('disabled','disabled');
    $("#password").attr('disabled','disabled');
    if(magic){
        $("#login-container").hide();
        $("#header").hide();
        $("#notice").text("Automagically signing in...");
    }
    let settings = {
        "url": "https://wpcs.xyz/login",
        "method": "POST",
        "timeout": 0,
        "data": {
            "username": ((magic) ? sessionStorage.getItem('u') : $("#username").val()),
            "password": ((magic) ? sessionStorage.getItem('p') : $("#password").val())
        }
    };
    sessionStorage.removeItem('u');
    sessionStorage.removeItem('p');
    $.ajax(settings).done(function (response) {
        if(response.token !== undefined) {
            sessionStorage.setItem('token', response.token);
            location.replace("https://wpcs.xyz/");
        }
    });
}