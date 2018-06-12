$(document).ready(function () {
  var api = {
    "api": {
    	"token":"1234",
      "ctrl":"get",
      "route":"token"
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

              var str  = '<tr data-id="'+data.ansver[i].id+'"';
                  if (data.ansver[i].active != 1) {
                    str += 'style="background-color: #fdc7c7;"';
                  }
                  str += '  >';
                  str += '  <td class="text-left">'+data.ansver[i].id+'</td>';
                  str += '  <td class="text-left">'+data.ansver[i].brand+' '+data.ansver[i].product+'</td>';
                  str += '  <td class="text-right" >'+data.ansver[i].token+'</td>';
                  str += '  <td class="text-right" >'+data.ansver[i].os+'</td>';
                  str += '  <td class="text-right" >'+data.ansver[i].ip+'</td>';
                  str += '  <td class="text-center">';
                  str += '    <div class="dropdown">';
                  str += '      <button class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" type="button" aria-expanded="false">';
                  str += '        Action';
                  str += '        <span class="caret"></span>';
                  str += '      </button>';
                  str += '      <ul class="dropdown-menu dropdown-menu-right">';
                  str += '        <li><a class="ban-token" data-id="'+data.ansver[i].id+'">Заблокировать</a></li>';
                  str += '      </ul>';
                  str += '    </div>';
                  str += '  </td>';
                  str += '</tr>';

          $('.table').find('tbody').append(str);
        }
        $('.ban-token').click(function (e) {
          console.log(e);
          var api = {
            "api": {
              "token":"1234",
              "ctrl":"ban_token",
              "route":"users",
              "id": $(this).data('id')
            }
          };
          $.ajax({
            type: "POST",
            url: "/api",
            data: JSON.stringify(api),
            dataType: "json",
            contentType: "application/json",
            success: function(data){
                location.reload();
                }
            });
        });

      }
    });




});
