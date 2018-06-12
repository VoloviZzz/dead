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
          document.location = "/profile";
          }
      });


      console.log('Thor is here!');
  });

});
