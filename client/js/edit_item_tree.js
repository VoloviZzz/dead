$(document).ready(function(){
  var tmp = document.location.href.split('/');
  var id = tmp[tmp.length-1];
  console.log(id);
  var api = {
    "api": {
      "token":"1234",
      "ctrl":"get_one",
      "route":"tree",
      "id": id
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
        $('#name').val(data.ansver[0].name);
        $('#ip').val(data.ansver[0].ip_adress);
        if (data.ansver[0].photo == null) {
          $('#uploadFiles_label').after('<div class="btn btn-primary btn-block" id="uploadFiles_BTN" onclick="$(\'#uploadFiles\').click()">Загрузить фото</div>');
        }else {
          $('#uploadFiles_label').after('<img id="first_photo" onclick="$(\'#uploadFiles\').click()" src="'+data.ansver[0].photo+'">');
        }
        $("#type [value='"+data.ansver[0].type+"']").attr("selected", "selected");
        $("#status [value='"+data.ansver[0].status+"']").attr("selected", "selected");
      }
    });


  $("#uploadFiles").change(function() {
      var files = this.files;
      uploader.addFiles(files);
      uploader.uploadAllFiles();
  });


  $('#edit_item_tree').click(function () {

    var api = {
      "api": {
        "token":"1234",
        "ctrl":"set",
        "route":"tree",
        "name":$('#name').val(),
        "photo":$('#first_photo').attr('src'),
        "ip": $('#ip').val(),
        "type":$("#type option:selected").val(),
        "status":$("#status option:selected").val(),
        "id":id
      }
    };
    // console.log(api);
    $.ajax({
      type: "POST",
      url: "/api",
      data: JSON.stringify(api),
      dataType: "json",
      contentType: "application/json",
      success: function(data){
          document.location = "/tree";
          // console.log(data);
          }
      });

  });

});
