window.onload = function() {
    $('#loading').hide();
};

function commit_game() {
    $('#create-game').hide();
    $('#loading').show();
    $("#game_name").attr('disabled','disabled');
    $("#description").attr('disabled','disabled');
    $("#story_setup").attr('disabled','disabled');
    let settings = {
        "url": "https://wpcs.xyz/api/games",
        "method": "POST",
        "timeout": 0,
        "data": {
            "token": sessionStorage.getItem('token'),
            "name": $("#game_name").val(),
            "description": $("#description").val(),
            "story_setup": $("#story_setup").val()
        }
    };

    $.ajax(settings).done(function (response) {
        if(response === "OK"){
            location.replace("https://wpcs.xyz/");
        }
    });
}