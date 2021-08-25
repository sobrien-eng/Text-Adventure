var settings = {
    "url": "https://wpcs.xyz/api/user?t=" + sessionStorage.getItem('token'),
    "method": "GET",
    "timeout": 0,
  };
  
function getUsername() 
  { 
    $.ajax(settings).done(function (response) {    
    username.innerHTML = (response.token);
    });
  }

  getUsername();
