$(document).ready(function () {
  var api = {
    "api": {
    	"token":"1234",
      "ctrl":"get",
      "route":"profile",
      "phone": $('#phone').text()
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
          var tmp = data.ansver;
          $('#fio').text(tmp.rows[0].surname+' '+tmp.rows[0].name+' '+tmp.rows[0].middle_name);
          $('#email').text(tmp.rows[0].email);
          if (!tmp.rows[0].cathedra) {
            $('#cathedra').text('Кафедра не выбрана.');
          }else {
            $('#cathedra').text(tmp.rows2[0].name);
          }
          if (!tmp.rows[0].id_degree) {
            $('#degree').text('Степень не выбрана.');
          }else {
            $('#degree').text(tmp.rows3[0].name);
          }
        }
    });
});
