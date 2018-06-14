$(document).ready(function () {
  $('#username').focus();
  $('#login').click(function () {
    var pass = $('#password').val();
    var user = $('#username').val();
    console.log(pass +' - '+ user);
    var api = {
      "api": {
        "token":"1234",
        "ctrl":"login",
        "route":"signup_admin",
        "phone": user,
        "password":pass
      }
    };
    $.ajax({
      type: "POST",
      url: "/api",
      data: JSON.stringify(api),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
<<<<<<< HEAD
          setTimeout(function () {
=======
        setTimeout(function () {
>>>>>>> e735c7e068b1a1d08411820d1d0978e2b2d03e07
          document.location = "/profile";
        }, 1000);
          }
      });


      console.log('Thor is here!');
  });

});
