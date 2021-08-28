window.onload = function () {
    initialize();
};

let first_event = 0;

function start_event() {
    $('#story_setup').hide();
    setupEvent(first_event);
}

function showLoading() {
    $('#game').hide();
    $('#loading').show();
}

function hideLoading() {
    $('#game').show();
    $('#loading').hide();
}

function handleEvent(id) {
    setupEvent($(id).data('ne'));
}

function initialize() { //50 for testing
    $('#game').hide();
    $("#start").hide();
    $('#loading').show();
    let settings = {
        "url": "https://wpcs.xyz/api/user/game",
        "method": "GET",
        "timeout": 0,
        "data": {
            "token": sessionStorage.getItem('token'),
            "game_id": sessionStorage.getItem('gameid')
        }
    };

    $.ajax(settings).done(function (response) {
        console.log(JSON.parse(response)[0]);
        first_event = JSON.parse(response)[0].first_event;
        $('#game_name').text(JSON.parse(response)[0].name);
        $('#description').text(JSON.parse(response)[0].description);
        $('#loading').hide();
        $('#start').show();
    });
}

function showButtonsReleventToOptions(numOptions) {
    $('#option_two').show();
    $('#option_three').show();
    $('#option_four').show();
    switch (numOptions) {
        case 1:
            $('#option_two').hide();
            $('#option_three').hide();
            $('#option_four').hide();
            break;
        case 2:
            $('#option_three').hide();
            $('#option_four').hide();
            break;
        case 3:
            $('#option_four').hide();
            break;
    }
}

function setupEvent(eid) {
    showLoading();
    var settings = {
        "url": "https://wpcs.xyz/api/events?id=" + eid,
        "method": "GET",
        "timeout": 0,
    };

    $.ajax(settings).done(function (response) {
        let event = JSON.parse(response);
        console.log(event);
        showButtonsReleventToOptions(event.number_of_options);
        $('#prompt').text(event.text);
        $('#option_one').data('ne', event.option_one_NE);
        $('#option_two').data('ne', event.option_two_NE);
        $('#option_three').data('ne', event.option_three_NE);
        $('#option_four').data('ne', event.option_four_NE);
        $('#option_one').text(event.option_one_text);
        $('#option_two').text(event.option_two_text);
        $('#option_three').text(event.option_three_text);
        $('#option_four').text(event.option_four_text);
        hideLoading();
    });
}