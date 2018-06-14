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
            var user = this;
            if (user.id == $('#emp_id').text()) {
              console.log(user.id+' - '+$('#emp_id').text());

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
                    // console.log(data.ansver);
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
                          // console.log(this.contract+' - '+qweqwe.id);
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
                            str += '      <li><a onclick="$(\'#edit_item\').click(); update_edit_block('+this.id+');" >Редактировать акт</a></li>';
                            str += '      <li><a onclick="delete_akt('+this.id+', this)">Удалить акт</a></li>';
                            // str += '      <li><a href="/uploads/f'+user.id+''+qweqwe.id+''+this.id+'.docx" download >Скачать .DOCX</a></li>';
                            str += '    </ul>';
                            str += '  </div>';
                            str += '</td>';
                            str += '</tr>'
                          }
                        });
                        str += '          </tbody>';
                        str += '        </table>';
                        str += '<div style="display:none" onclick="print_contract('+this.id+')" class="btn btn-info print">Печать трудового догавора</div>';
                        str += '<div style="display:none" onclick="remove_contract('+this.id+', this)" class="btn btn-danger print">Удалить трудовой договор</div>';
                        str += '<div style="display:none" onclick="print_akt('+this.id+')" class="btn btn-info print">Печать списка акта работ</div>';
                        str += '<div style="display:none" onclick="save_akt('+this.id+', this)" class="btn btn-danger print">Создать .DOCX</a>';
                        // str += '<a style="display:none; padding: 7px 15px;" href="/upload/contract'+this.id+'.docx" download class="btn btn-danger print">Скачать .DOCX</a>';
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
            }
          });
        }
    });
});

function remove_contract(id, btn) {
  if (confirm('Удалить?')) {
    console.log('del');
    var api = {
      "api": {
        "token":"1234",
        "ctrl":"del_c",
        "route":"akt",
        "akt": id
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
            $(btn).parent().hide(200);
          }
    });
  }else {
    console.log('BACK');
  }
}


function delete_akt(id, btn) {
  if (confirm('Удалить?')) {
    console.log('del');
    var api = {
      "api": {
        "token":"1234",
        "ctrl":"del",
        "route":"akt",
        "akt": id
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
            $(btn).parent().parent().parent().parent().parent().hide(200);
          }
    });
  }else {
    console.log('BACK');
  }
}


function update_edit_block(akt_id) {

  var api = {
    "api": {
      "token":"1234",
      "ctrl":"get",
      "route":"all_selects_with_akt",
      "emp": $('#emp_id').text(),
      "akt": akt_id
    }
  };
  $.ajax({
    type: "POST",
    url: "/api",
    data: JSON.stringify(api),
    dataType: "json",
    contentType: "application/json",
    success: function(data){
      $('#degree').empty();
      $('#groups').empty();
      $('#items').empty();
      $('#contracts').empty();
      $('#time').empty();
      $('#type_work').empty();
      $('#date').val('');
          console.log(data);
          var ansver = data.ansver;
          $('#date').val(ansver.akts[0].date.split('T1')[0]);
          $.each(ansver.degree, function () {
            var str = '<option ';
            if (ansver.akts[0].degree == this.id) {
              str += ' selected ';
            }
            str += ' value="'+this.id+'">'+this.name+'</option>';
            $('#degree').append(str);
          });
          $.each(ansver.groups, function () {
            var str = '<option ';
            if (ansver.akts[0].group == this.id) {
              str += ' selected ';
            }
            str += ' value="'+this.id+'">'+this.name_group+'</option>';
            $('#groups').append(str);
          });
          $.each(ansver.items, function () {
            var str = '<option ';
            if (ansver.akts[0].item == this.id) {
              str += ' selected ';
            }
            str += ' value="'+this.id+'">'+this.name_item+'</option>';
            $('#items').append(str);
          });
          $.each(ansver.contracts, function () {
            var str = '<option ';
            if (ansver.akts[0].contract == this.id) {
              str += ' selected ';
            }
            str += ' value="'+this.id+'">'+this.id+' - '+this.num+'</option>';
            $('#contracts').append(str);
          });

          var time = [
            "8:00 - 9:30",
            "9:40 - 11:10",
            "11:20 - 12:50",
            "13:00 - 14:30",
            "14:40 - 16:10"
          ];
          var type = [
            "Лекция",
            "Практическое занятие"
          ];

          $.each(time, function (index, val) {
            var str = '<option ';
            if (ansver.akts[0].time == index) {
              str += ' selected ';
            }
            str += ' value="'+index+'">'+val+'</option>';
            $('#time').append(str);
          });

          $.each(type, function (index, val) {
            var str = '<option ';
            if (ansver.akts[0].type == index) {
              str += ' selected ';
            }
            str += ' value="'+index+'">'+val+'</option>';
            $('#type_work').append(str);
          });

          $('#edit_akts').click(function () {
            console.log(akt_id);
            var api = {
              "api": {
              	"token":"1234",
                "ctrl":"edit",
                "route":"akt",
                "akt": akt_id,
                "date": $('#date').val(),
                "degree": $('#degree option:selected').val(),
                "groups": $('#groups option:selected').val(),
                "items": $('#items option:selected').val(),
                "contracts": $('#contracts option:selected').val(),
                "time": $('#time option:selected').val(),
                "type_work": $('#type_work option:selected').val(),
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
                    alert('Акт отредактирован');
                    location.reload();
                  }
              });
          });
        }
    });
}


function save_akt(id, btn){
  console.log('creating...');
  $.ajax({
    type: "GET",
    url: "/akt_print",
    data: {id: id},
    success: function(data){
          console.log(data);
          var api = {
            "api": {
              "token":"1234",
              "ctrl":"file",
              "route":"photo",
              "text": data
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
                  $(btn).after('<a padding: 7px 15px;" href="/uploads/f'+data.ansver+'.docx" download class="btn btn-success print">Скачать .DOCX</a>');
                }
            });
        }
    });
}


function print_contract(id){
  $.ajax({
    type: "GET",
    url: "/akt_contract",
    data: {id: id},
    success: function(data){
          console.log(data);
          var printwin = open('', '', 'width=' + screen.Width + ',height=' + screen.Height);
          console.log(printwin);
          setTimeout(function () {
            printwin.document.open();
            printwin.document.writeln(data);
            printwin.document.close();
          }, 1000);

        }
    });
}


function print_akt(id){
  $.ajax({
    type: "GET",
    url: "/akt_print",
    data: {id: id},
    success: function(data){
          console.log(data);
          var printwin = open('', '', 'width=' + screen.Width + ',height=' + screen.Height);
          console.log(printwin);
          setTimeout(function () {
            printwin.document.open();
            // printwin.document.writeln('<html><head><title></title></head><body onload=print();close()>');
            printwin.document.writeln(data);
            // printwin.document.writeln('</body></html>');
            printwin.document.close();
          }, 1000);

        }
    });
}



























//-----------------
