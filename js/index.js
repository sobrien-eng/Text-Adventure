const username = document.getElementById('username');


var getUsername = {
    "url": "https://wpcs.xyz/api/user?t=" + sessionStorage.getItem('token'),
    "method": "GET",
    "timeout": 0,
  };


  
function setUsername() 
  { 
    $.ajax(getUsername).done(function (response) {    
    username.innerHTML = (response.token);
    });
  }

 
setUsername();
