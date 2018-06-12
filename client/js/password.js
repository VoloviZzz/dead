$(document).ready(function () {
  var error = false;
  $('#pass2').keyup(function (e) {
    if ($(this).val() == $('#pass').val()) {
      $(this).css('border', '1px solid rgb(0, 221, 0)');
      error = false;
    }else {
      $(this).css('border', '1px solid rgb(221, 0, 0)');
      error = true;
    }
  });

  $('#new_pass').click(function () {
      if (error == false) {
        var phone = $('#phone').val();
        var api = {
          "api": {
            "token":"1234",
            "ctrl":"set",
            "route":"signup",
            "phone": $('#phone').val(),
            "password":$('#pass').val()
          }
        };
        $.ajax({
          type: "POST",
          url: "/api",
          data: JSON.stringify(api),
          dataType: "json",
          contentType: "application/json",
          success: function(data){
              document.location = "/login";
              }
          });
      }else {
        alert('error');
      }
  });

  $('#send_sms').click(function () {
    var phone = $('#phone').val();
    var api = {
      "api": {
        "token":"1234",
        "ctrl":"generate",
        "route":"sms",
        "phone": $('#phone').val()
      }
    };
    $.ajax({
      type: "POST",
      url: "/api",
      data: JSON.stringify(api),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
          $('#code').parent().show();
          $('#check_code').show();
          $('#send_sms').hide();
          $('#phone').prop('disabled', true);
          }
      });
  });
  $('#check_code').click(function () {
    var phone = $('#phone').val();
    var api = {
      "api": {
        "token":"1234",
        "ctrl":"check",
        "route":"sms",
        "phone": $('#phone').val(),
        "code": $('#code').val()
      }
    };
    $.ajax({
      type: "POST",
      url: "/api",
      data: JSON.stringify(api),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
            if (data.status == 'ok') {
              $('#pass').parent().show();
              $('#pass2').parent().show();
              $('#new_pass').show();
              $('#check_code').hide();
              $('#code').parent().hide();
            }
          }
      });
  });
});
