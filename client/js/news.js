$(document).ready(function () {

  var api = {
    "api": {
    	"token":"1234",
      "ctrl":"get",
      "route":"news"
    }
  };
  $.ajax({
    type: "POST",
    url: "/api",
    data: JSON.stringify(api),
    dataType: "json",
    contentType: "application/json",
    success: function(data){
        console.log(data.ansver);
        for (var i = 0; i < data.ansver.length; i++) {
          var str  = '<div class="form-group">';
              str += '  <ul class="list-inline form-news" id="new'+data.ansver[i].id+'">';
              str += '    <li>';
              str += '      <big>'+data.ansver[i].title+'</big>';
              str += '    </li>';
              str += '    <li>';
              str += '      <img src="'+data.ansver[i].photo+'">';
              str += '    </li>';
              str += '    <li class="body-small">';
              str += '      <small>'+data.ansver[i].body.split('</abz>')[0].substr(0, 25)+'... </small>';
              str += '    </li>';
              str += '    <li class="body-full" style="display:none">';
              str += '      <small></small>';
              str += '    </li>';
              str += '  </ul>';
              str += '</div>';
          $('#news').append(str);
          var str = ' <a class="btn btn-success btn-block edit" href="edit_news/'+data.ansver[i].id+'">edit</a>';
              str += '<div class="btn btn-primary delete btn-block" data-id="'+data.ansver[i].id+'">delete</div> <br>';
          $('#new'+data.ansver[i].id).find('.body-full small').html(data.ansver[i].body + str);
        }
        $('.delete').click(function (e) {
          console.log(e);
          var id = $(this).data('id');
          var api = {
            "api": {
            	"token":"1234",
              "ctrl":"del",
              "route":"news",
              "id": id
            }
          };
          var btn = $(this).parent().parent().parent();
          $.ajax({
            type: "POST",
            url: "/api",
            data: JSON.stringify(api),
            dataType: "json",
            contentType: "application/json",
            success: function(data){
                console.log(data);
                // console.log(this);
                btn.hide(500, function () {
                  btn.remove();
                });
                }
            });
        })
        $('.form-news li').find('img').click(function () {
          $(this).parent().parent().find('.body-small').toggle(250);
          $(this).parent().parent().find('.body-full').toggle(250);
          console.log('click');
        });
      }
    });
});

function convert_body(text) {
  var regexp = /<photo>(.*)<\/photo>/gu;
  var out = text.match(regexp);
  console.log(out);
  var text = text.replace(/<photo>(.*)<\/photo>/,  '<li><img src="'+out+'"></li>');
  return text;
}
























//---
