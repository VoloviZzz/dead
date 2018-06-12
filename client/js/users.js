function collapse(btn) {
  $(btn).parent().find('table').toggle(200);
  $(btn).parent().find('.print').toggle(200);
}

$(document).ready(function () {
  var api = {
    "api": {
    	"token":"1234",
      "ctrl":"get",
      "route":"users"
    }
  };
  $.ajax({
    type: "POST",
    url: "/api",
    data: JSON.stringify(api),
    dataType: "json",
    contentType: "application/json",
    success: function(data){
          $.each(data.ansver, function () {
            console.log(this);
            var user = this;
            var list = '<li class="contact-list-item">';
            list +=  '<a class="contact-list-link" href="#'+user.id+'" data-toggle="tab" aria-expanded="true">';
            list += '    <div class="contact-list-details">';
            list += '      <h5 class="contact-list-name">';
            list += '        <span class="truncate">'+user.surname+' '+user.name+'</span>';
            list += '      </h5>';
            list += '      <small class="contact-list-email">';
            list += '        <span class="truncate">'+user.email+'</span>';
            list += '      </small>';
            list += '    </div>';
            list += '  </a>';
            list += '</li>';
            $('#contacts').find('.contact-list').append(list);
            var api = {
              "api": {
                "token":"1234",
                "ctrl":"get",
                "route":"contract"
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
                    var tmp = data.ansver;

                    var str = '<div id="'+user.id+'" class="contact-content">';
                    str += '  <div class="contact-content-body">';
                    str += '    <div class="contact-info">';
                    str += '      <h2 class="contact-name">'+user.surname+' '+user.name+'</h2>';
                    str += '      <p class="contact-job-title">Трудовые договоры пользователя</p>';
                    str += '    </div>';
                    str += '    <ul class="contracts sidenav">';
                    $.each(tmp.rows, function (val) {
                      if (this.emp == user.id) {
                        var words_sum = 0;
                        $.each(JSON.parse(this.words), function () {
                          words_sum += Number(this);
                        });
                        var today  = new Date(this.date);
                        str += '<li class="sidenav-item cursor"><a onclick="collapse(this)">#'+this.num+'. Трудовой договор №'+this.id+' - Сумма часов('+words_sum+') за ('+today.toLocaleDateString("en-US")+'г.)</a>';
                        str += '  <table style="display:none" class="table table-hover table-bordered table-striped">';
                        str += '   <thead>';
                        str += '      <tr>';
                        str += '       <th class="text-left">#</th>';
                        str += '       <th class="text-left">Учёная степень</th>';
                        str += '       <th class="text-right">Группа</th>';
                        str += '       <th class="text-right">Предмет</th>';
                        str += '       <th class="text-right">Тип работы</th>';
                        str += '       <th class="text-right">Час</th>';
                        str += '       <th class="text-center">Actions</th>';
                        str += '      </tr>';
                        str += '    </thead>';
                        str += '  <tbody>';
                        var qweqwe = this;
                        $.each(tmp.rows2, function (val2) {
                          console.log(this.contract+' - '+qweqwe.id);
                          if (this.contract == qweqwe.id) {
                            var type = this.type == 0 ? 'Лекция' : 'Практическое занятие';
                            var time;
                            switch (this.time) {
                              case 0:
                                time = '8:00 - 9:30';
                                break;
                              case 1:
                                time = '9:40 - 11:10';
                                break;
                              case 2:
                                time = '11:20 - 12:50';
                                break;
                              case 3:
                                time = '13:00 - 14:30';
                                break;
                              case 4:
                                time = '14:40 - 16:10';
                                break;
                              default:
                                alert( '---' );
                            }
                            str += '<tr>'
                            str += '<td class="text-left">'+this.id+'</td>';
                            str += '<td class="text-left">'+this.name+'</td>';
                            str += '<td class="text-right">'+this.name_group+'</td>';
                            str += '<td class="text-right">'+this.name_item+'</td>';
                            str += '<td class="text-right">'+type+'</td>';
                            str += '<td class="text-right">'+time+'</td>';
                            str += '<td class="text-center">';
                            str += '  <div class="dropdown">';
                            str += '    <button class="btn btn-primary btn-xs dropdown-toggle" data-toggle="dropdown" type="button">';
                            str += '      More';
                            str += '      <span class="caret"></span>';
                            str += '    </button>';
                            str += '    <ul class="dropdown-menu dropdown-menu-right">';
                            // str += '      <li><a onclick="print_akt('+this.id+')">Печать</a></li>';
                            str += '      <li><a onclick="print_akt('+this.id+')">Редактировать акт</a></li>';
                            str += '      <li><a onclick="print_akt('+this.id+')">Удалить акт</a></li>';
                            // str += '      <li><a href="/uploads/f'+user.id+''+qweqwe.id+''+this.id+'.docx" download >Скачать .DOCX</a></li>';
                            str += '    </ul>';
                            str += '  </div>';
                            str += '</td>';
                            str += '</tr>'
                          }
                        });
                        str += '          </tbody>';
                        str += '        </table>';
                        str += '<div style="display:none" onclick="print_akt('+this.id+')" class="btn btn-info print">Печать трудового догавора</div>';
                        str += '<div style="display:none" onclick="remove_contract('+this.id+')" class="btn btn-danger print">Удалить трудовой договор</div>';
                        str += '<div style="display:none" onclick="print_contract('+this.id+')" class="btn btn-info print">Печать списка акта работ</div>';
                        str += '<a style="display:none; padding: 7px 15px;" href="/upload/contract'+this.id+'.docx" download class="btn btn-danger print">Скачать .DOCX</a>';
                        str += '      </li>';
                        str += '<br>';
                      }
                    });
                    str += '    </ul>';
                    str += '  </div>';
                    str += '</div>';
                    $('.contact').append(str);
                  }
              });
          });
        }
    });
});


function print_akt(id){
  var api = {
    "api": {
      "token":"1234",
      "ctrl":"get",
      "route":"akt",
      "id":id
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
          var printwin = open('', 'printwin', 'width=' + screen.Width + ',height=' + screen.Height);
            printwin.document.open();
            printwin.document.writeln('<html><head><title></title></head><body onload=print();close()>');
            printwin.document.writeln(data);
            printwin.document.writeln('</body></html>');
            printwin.document.close();
        }
    });



}



























//-----------------
