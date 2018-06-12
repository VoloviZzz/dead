$(document).ready(function(){

  $("#uploadFiles").change(function() {
      var files = this.files;

      uploader.addFiles(files);
      uploader.uploadAllFiles();
  });

  $("#uploadFiles1").change(function() {
      var files = this.files;

      uploader.addFiles1(files);
      uploader.uploadAllFiles1();
  });

  $('#add_new_abz').click(function () {
    $('#news_editor').append('<textarea class="news" rows="8" cols="80" placeholder="Начните писать новый абзац"></textarea>');
  });

  $('#add_new_photo').click(function () {
    $('#news_editor').append('<div class="btn btn-primary btn-block" id="uploadFiles_BTN1" onclick="$(\'#uploadFiles1\').click()">Загрузить фото</div>');
  });

  $('#add_new_news').click(function () {

    var body = '';
    $('.news').each(function (i) {
      if(typeof($(this).attr('src')) == 'undefined'){
        body += '<abz>'+$(this).val()+'</abz>';
      }else{
        body += '<img src="'+$(this).attr('src')+'">';
      }
    });
    body += '';

    var api = {
      "api": {
        "token":"1234",
        "ctrl":"add",
        "route":"news",
        "title":$('#title').val(),
        "photo":$('#title_photo').attr('src'),
        "body": body
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
          document.location = "/news";
          // console.log(data);
          }
      });

  });

});
