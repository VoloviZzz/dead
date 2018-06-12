function input_radio() {
  if ($('#input1').prop('checked') == true) {
    $('.input2_block').hide(200);
  }else {
    $('.input2_block').show(200);
  }
}
$(document).ready(function () {
  $('#input1').click(function () {
    input_radio();
  });
  $('#input2').click(function () {
    input_radio();
  });


  var api = {
    "api": {
    	"token":"1234",
      "ctrl":"get",
      "route":"all_selects",
      "emp": $('#emp_id').text()
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
          $.each(ansver.degree, function () {
            var str = '<option value="'+this.id+'">'+this.name+'</option>';
            $('#degree').append(str);
          });
          $.each(ansver.groups, function () {
            var str = '<option value="'+this.id+'">'+this.name_group+'</option>';
            $('#groups').append(str);
          });
          $.each(ansver.items, function () {
            var str = '<option value="'+this.id+'">'+this.name_item+'</option>';
            $('#items').append(str);
          });
        }
    });

  $('#add_contract').click(function () {
    var words = [];
    $.each($('.words'), function () {
      words.push($(this).val());
    });
    var api = {
      "api": {
      	"token":"1234",
        "ctrl":"add",
        "route":"contract",
        "date": $('#date').val(),
        "num": $('#num').val(),
        "name": $('#name').val(),
        "surname": $('#surname').val(),
        "middle_name": $('#middle_name').val(),
        "degree":  $('#degree option:selected').val(),
        "groups":  $('#groups option:selected').val(),
        "items":  $('#items option:selected').val(),
        "input": $('#input1').prop('checked') == true ? 0 : 1,
        "input_FIO": $('#input_name').val(),
        "input_date": $('#input_date').val(),
        "input_num": $('#input_num').val(),
        "words": words
      }
    };
    console.log(api);
    $.ajax({
      type: "POST",
      url: "/api",
      data: JSON.stringify(api),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
            console.log(data);
            alert('Трудовой договор создан.');
            if (confirm('Перейти к списку пользователей?')) {
              document.location = "/users";
            }
          }
      });
  });
});
