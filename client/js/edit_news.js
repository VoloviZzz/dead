$(document).ready(function(){
  var tmp = document.location.href.split('/');
  var id = tmp[tmp.length-1];
  console.log(id);
  var api = {
    "api": {
      "token":"1234",
      "ctrl":"get_one",
      "route":"news",
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
        $('#title').val(data.ansver[0].title);
        $('#uploadFiles_label').after('<img id="first_photo" onclick="$(\'#uploadFiles\').click()" src="'+data.ansver[0].photo+'">');
        var body = data.ansver[0].body;
        var tmp = body.split('</abz>');
        console.log(tmp);
        $(tmp).each(function (i) {
            var tmp2 = this.split('<abz>');
            console.log(tmp2);
            if (tmp2[0] != '') {
              $('#news_editor').append(tmp2[0]);
            }
            if (typeof(tmp2[1]) != 'undefined') {
              $('#news_editor').append('<textarea class="news" rows="'+tmp2[1].length/41+'" placeholder="Начните писать новый абзац">'+tmp2[1]+'</textarea>');
            }
        });
        var index = 0;
        $('#news_editor').find('img').each(function (i) {
          $(this).addClass('news');
          $(this).attr('id', 'photo'+index);
          index++;
          $(this).click(function () {
            localStorage.elem = $(this).attr('id');
            $('#uploadFiles1').click();
          });
        });
      }
    });


  $("#uploadFiles").change(function() {
      var files = this.files;

      uploader.addFiles(files);
      uploader.uploadAllFiles();
  });

  $("#uploadFiles1").change(function() {
      var files = this.files;

      uploader.addFiles1(files);
      uploader.uploadAllFiles1();
      // $(this).attr('src', );
  });

  $('#add_new_abz').click(function () {
    $('#news_editor').append('<textarea class="news" rows="8" cols="80" placeholder="Начните писать новый абзац"></textarea>');
  });

  $('#add_new_photo').click(function () {
    $('#news_editor').append('<div class="btn btn-primary btn-block" id="uploadFiles_BTN1" onclick="$(\'#uploadFiles1\').click(); localStorage.elem = \'false\'">Загрузить фото</div>');
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
    var tmp = document.location.href.split('/');
    var id = tmp[tmp.length-1];

    var api = {
      "api": {
        "token":"1234",
        "ctrl":"set",
        "route":"news",
        "title":$('#title').val(),
        "photo":$('#first_photo').attr('src'),
        "body": body,
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
          document.location = "/news";
          // console.log(data);
          }
      });

  });

});
