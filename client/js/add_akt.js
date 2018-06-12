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
          $.each(ansver.contracts, function () {
            var str = '<option value="'+this.id+'">'+this.id+' - '+this.num+'</option>';
            $('#contracts').append(str);
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
        "route":"akt",
        "date": $('#date').val(),
        "degree":  $('#degree option:selected').val(),
        "groups":  $('#groups option:selected').val(),
        "items":  $('#items option:selected').val(),
        "contracts":  $('#contracts option:selected').val(),
        "time":  $('#time option:selected').val(),
        "type_work":  $('#type_work option:selected').val(),
        "emp": $('#emp_id').text()
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
            alert('Добавлен Новый Акт');
          }
      });
  });
});
