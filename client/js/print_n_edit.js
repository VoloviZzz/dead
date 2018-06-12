function collapse(btn) {
  $(btn).parent().find('table').toggle(200);
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

              // console.log(this);
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
                          str += '<li class="sidenav-item"><a onclick="collapse(this)">Трудовой договор №'+this.id+'</a>';
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
                              str += '      <li><a onclick="print_akt('+this.id+')">Печать</a></li>';
                              str += '      <li><a href="/uploads/f'+user.id+''+qweqwe.id+''+this.id+'.docx" download >Скачать .DOCX</a></li>';
                              str += '    </ul>';
                              str += '  </div>';
                              str += '</td>';
                              str += '</tr>'
                            }
                          });
                          str += '          </tbody>';
                          str += '        </table>';
                          str += '      </li>';
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

function print_akt(akt_id) {

}


function print_akt(){
  var body = 'АКТ выполненных работ по проведению занятий по учебной работе по трудовому договору № _______ от «12»Jun20 18 г.';
    body += 'г. Магнитогорск «12»Jun20 18 г.';
    body += 'ФГБОУ ВО «Магнитогорский государственный технический университет им. Г.И.Носова» именуемое в дальнейшем «Работодатель», ';
    body += 'в лице ректора Колокольцева В.М., действующего на основании Устава, и____________________________________, к.т.н., доцент__________________ (Ф.И.О., ученая степень, ученое звание) _________________________________________ именуемый(ая) в дальнейшем «Преподаватель», подписали настоящий Акт о нижеследующем. 1 .Преподаватель в период с «_18_»__мая___20 17_г. по «12»Jun20';
    body += 'выполнил работу по проведению занятий дисциплине (модулю):__Прикладное программирование _____________________________________________________________________________________ (наименование дисциплины (модуля)/индекс группы) Выполнил работу по реализации ОП _____________________________________________________ (наименование ОП) по следующим видам учебной работы:';
    body += 'Дата	Часы	Вид работы	Курс, группа	К-во часов	Предмет';
    body += '2017-11-11	11:20-12:50	Лекция	ППрК-14-1	2	Философия';
    body += '2017-11-01	9:40-11:10	Практическое занятие	ЖЖрД-15-1	2	Философия';
    body += '2017-10-30	11:20-12:50	Практическое занятие	ЖЖрД-15-1	2	История';
    body += '2018-02-16	9:40-11:10	Практическое занятие	ППрК-14-1	2	Высшая математика';
    body += '2018-04-12	11:20-12:50	Практическое занятие	ППрК-14-1	2	Философия';
    body += '2018-05-01	8:00-9:30	Лекция	ППрК-14-1	2	Высшая математика';
    body += '0000-00-00	8:00-9:30	Лекция	ППрК-14-1	2	Высшая математика';
    body += '2018-05-02	8:00-9:30	Лекция	ППрК-14-1	2	Высшая математика';
    body += 'Итого академических часов ___________72____________. Итого часов ____________________72__________________. 2. Размер почасовой ставки оплаты труда составляет __________________________________ (__________________________________________________________________________) руб. 3. Всего к оплате_______________(________________________________________________ ________________________________________________________________________________) руб. 4. Настоящий акт составлен и подписан в двух'; body += 'экземплярах, имеющих одинаковую юриди-ческую силу для сторон. 5. Подписи сторон: Работодатель	Работник Ректор __________________В.М. Колокольцев ___________ ________________ М.П. (подпись) (подпись) (расшифровка подписи) Контактный телефон 89030915315 Заместитель директора по УМР _________________ Ю.В. Федосеева . (подпись) Старший диспетчер ________________ Д.Г.Базарова (подпись)';

    var printWin = window.open('', '', 'width=' + screen.Width + ',height=' + screen.Height);
    // printWin.document.open();
    printWin.document.write(body);
    // printWin.document.focus();
    setTimeout(function () {
      printWin.print();
      // printwin.close();
    }, 1000);


}



























//-----------------
