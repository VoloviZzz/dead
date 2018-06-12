$(document).ready(function () {


  var api = {
    "api": {
      "token":"1234",
      "ctrl":"get",
      "route":"tree"
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
      for (var i = 0; i < tmp.length; i++) {
        if (tmp[i].right_key <= 17 && tmp[i].left_key >= 2) {
          console.log(tmp[i]);
        }
      };
      for (var i = 0; i < tmp.length; i++) {
        var str = '<div class="form-group">';
        for (var j = 0; j < tmp[i].level-1; j++) {
          str += '<div class="btn btn-success"></div>';
        };
        str += '<a href="/edit_item_tree/'+tmp[i].id+'" class="btn btn-success">'+tmp[i].name+'</a>';
        str += '<div class="btn btn-primary" onclick="del_stick(this)" data-rkey="'+tmp[i].right_key+'" data-lkey="'+tmp[i].left_key+'" >✖</div>';
        str += '</div>';
        $('#tree').append(str);
        adds(tmp, i);

      }
    }
  });
});

function del_stick(elem) {
  var right_key = $(elem).data('rkey');
  var left_key = $(elem).data('lkey');

  var api = {
    "api": {
      "token":"1234",
      "ctrl":"del",
      "route":"tree",
      "right_key":right_key,
      "left_key":left_key,
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
      location.reload();
    }
  });
};

function add_stick(elem) {
  var right_key = $(elem).data('key');
  var name = $(elem).data('name');
  var level = $(elem).data('level');

  var api = {
    "api": {
      "token":"1234",
      "ctrl":"add",
      "route":"tree",
      "right_key":right_key,
      "level":level,
      "name":name
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
      location.reload();
    }
  });
};


function adds(tmp, i) {
  if (!tmp[i+1]) {
    var b = 0;
    var bool = true;
    while (bool) {
      if (tmp[i-b].level != tmp[i].level) {
        bool = false;
        var right_key = tmp[i-b].right_key;
        var name = 'Новый город';
        var level = tmp[i-b].level;
      }
      b++;
    }

    var str2 = '<div class="form-group">';
    for (var k = 0; k < tmp[i].level-1; k++) {
      str2 += '<div class="btn btn-primary"></div>';
    };
    str2 += '<div class="btn btn-primary" onclick="add_stick(this)" data-key="'+right_key+'" data-level="'+level+'" data-name="'+name+'">Добавить город</div>';
    str2 += '</div>';
    $('#tree').append(str2);
    var str2 = '<div class="form-group">';
    for (var k = 0; k < tmp[i].level-2; k++) {
      str2 += '<div class="btn btn-primary"></div>';
    };
    str2 += '<div class="btn btn-primary" onclick="add_stick(this)" data-key="'+right_key+'" data-level="'+level+'" data-name="Новая Область">Новая Область</div>';
    str2 += '</div>';
    $('#tree').append(str2);
    var str2 = '<div class="form-group">';
    for (var k = 0; k < tmp[i].level-3; k++) {
      str2 += '<div class="btn btn-primary"></div>';
    };
    str2 += '<div class="btn btn-primary" onclick="add_stick(this)" data-key="'+right_key+'" data-level="'+level+'" data-name="Новый ФО">Новый ФО</div>';
    str2 += '</div>';
    $('#tree').append(str2);
    var str2 = '<div class="form-group">';
    for (var k = 0; k < tmp[i].level-4; k++) {
      str2 += '<div class="btn btn-primary"></div>';
    };
    str2 += '<div class="btn btn-primary" onclick="add_stick(this)" data-key="'+right_key+'" data-level="'+level+'" data-name="Новая Страна">Новая Страна</div>';
    str2 += '</div>';
    $('#tree').append(str2);
  }else {
    if (tmp[i].level == 4) {
      if (tmp[i].level != tmp[i+1].level) {
        var b = 0;
        var bool = true;
        while (bool) {
          if (tmp[i-b].level != tmp[i].level) {
            bool = false;
            var right_key = tmp[i-b].right_key;
            var name = 'Новый город';
            var level = tmp[i-b].level;
          }
          b++;
        }

        var str2 = '<div class="form-group">';
        for (var k = 0; k < tmp[i].level-1; k++) {
          str2 += '<div class="btn btn-primary"></div>';
        };
        str2 += '<div class="btn btn-primary" onclick="add_stick(this)" data-key="'+right_key+'" data-level="'+level+'" data-name="'+name+'">Добавить город</div>';
        str2 += '</div>';
        $('#tree').append(str2);
        var str2 = '<div class="form-group">';
        for (var k = 0; k < tmp[i].level-2; k++) {
          str2 += '<div class="btn btn-primary"></div>';
        };
        str2 += '<div class="btn btn-primary" onclick="add_stick(this)" data-key="'+right_key+'" data-level="'+level+'" data-name="Новая Область">Новая Область</div>';
        str2 += '</div>';
        $('#tree').append(str2);
      }
    }
    if (tmp[i].level == 3) {
      if (tmp[i].level >= tmp[i+1].level) {
        var right_key = tmp[i].right_key;
        var name = 'Новая ветка';
        var level = tmp[i].level;
        var str2 = '<div class="form-group">';
        for (var k = 0; k < tmp[i].level-1; k++) {
          str2 += '<div class="btn btn-primary"></div>';
        };
        str2 += '<div class="btn btn-primary" onclick="add_stick(this)" data-key="'+right_key+'" data-level="'+level+'" data-name="'+name+'">Добавить город</div>';
        str2 += '</div>';
        $('#tree').append(str2);
      }else {

      }
    }
  }
}
