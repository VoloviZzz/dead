$(document).ready(function () {
  var phone_one = $('#phone').val();


  $('#save_edit').click(function () {
    var api = {
      "api": {
      	"token":"1234",
        "ctrl":"set",
        "route":"profile",
        "who_phone": phone_one,
        "phone": $('#phone').val(),
        "name": $('#name').val(),
        "surname": $('#surname').val(),
        "middle_name": $('#second_name').val(),
        "email": $('#email').val(),
        "degree": $('#degree option:selected').val(),
        "cathedra": $('#cathedra option:selected').val()
      }
    };
    $.ajax({
      type: "POST",
      url: "/api",
      data: JSON.stringify(api),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
        console.log(data);
        document.location = "/profile";
          }
      });
  });

  var api = {
    "api": {
    	"token":"1234",
      "ctrl":"get_edit",
      "route":"profile",
      "phone": phone_one
    }
  };
  $.ajax({
    type: "POST",
    url: "/api",
    data: JSON.stringify(api),
    dataType: "json",
    contentType: "application/json",
    success: function(data){
        console.log(data);
        var ansver = data.ansver;
        $('#name').val(ansver.data.name);
        $('#surname').val(ansver.data.surname);
        $('#second_name').val(ansver.data.middle_name);
        $('#email').val(ansver.data.email);
        // $('#degree')
        $.each(ansver.degree, function () {
          var str = '<option ';
          ansver.data.id_degree == this.id ? str += 'selected ' : str += '';
          str += 'value="'+this.id+'">'+this.name+'</option>';
          $('#degree').append(str);
        });
        $.each(ansver.cathedra, function () {
          var str = '<option ';
          ansver.data.cathedra == this.id ? str += 'selected ' : str += '';
          str += 'value="'+this.id+'">'+this.name+'</option>';
          $('#cathedra').append(str);
        });
        }
    });
});
