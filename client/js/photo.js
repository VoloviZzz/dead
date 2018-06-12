function open_coq() {
  if ($('#first_photo').attr('src') != "/uploads/take_a_pic.png") {
    $('.select_btn').toggle(300);
    $('#detect').toggle(300);
  }
  $('.chenge_photo').toggle(300);

  setTimeout(function () {
    $('.select_btn').hide(300);
    $('.chenge_photo').hide(300);
    $('#detect').hide(300);
  }, 2800);
}

function open_photo_editor() {
  $('.select_btn').toggle(300);
  $('.chenge_photo').toggle(300);
  $('#detect').toggle(300);
  $('#selected').show(300);

  	$('#first_photo').Jcrop({
  		onChange:   showCoords,
  		onSelect:   showCoords
  	},function(){
  		jcrop_api = this;
  	});

      // $('#release').click(function(e) {
  		// release();
      // });

      $('#ar_lock').change(function(e) {
  		jcrop_api.setOptions(this.checked?
  			{ aspectRatio: 4/3 }: { aspectRatio: 0 });
  		jcrop_api.focus();
      });

     $('#size_lock').change(function(e) {
  		jcrop_api.setOptions(this.checked? {
  			minSize: [ 80, 80 ],
  			maxSize: [ 350, 350 ]
  		}: {
  			minSize: [ 0, 0 ],
  			maxSize: [ 0, 0 ]
  		});
  		jcrop_api.focus();
      });


  	function showCoords(c){
  		x1 = c.x; $('#x1').val(c.x);
  		y1 = c.y; $('#y1').val(c.y);
  		x2 = c.x2; $('#x2').val(c.x2);
  		y2 = c.y2; $('#y2').val(c.y2);

  		$('#w').val(c.w);
  		$('#h').val(c.h);

  		if(c.w > 0 && c.h > 0){
  			$('#crop').show();
  		}else{
  			$('#crop').hide();
  		}

  	}

  function release(){
  	jcrop_api.release();
  	$('#crop').hide();
  }

  	$('#crop').click(function(e) {
      $('.loader').show(200);
  		var img =             $('#first_photo').attr('src');
      var width =           $('#w').val();
  		var height =          $('#h').val();
      var x1 =              $('#x1').val();
	    var y1 =              $('#y1').val();
      var edited_width  =   $('#first_photo').width();
      var edited_height =   $('#first_photo').height();
      // var n_width =   $('#first_photo')[0].naturalWidth;
      // var n_height =  $('#first_photo')[0].naturalHeight;


      var api = {
        "api": {
          "token":"1234",
          "ctrl":"crop",
          "route":"photo",
          "img":img,
          "width":width,
          "height":height,
          "x1":x1,
          "y1":y1,
          "edited_width":edited_width,
          "edited_width":edited_width,
          "num": croped_photo_num
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
            console.log(data);
            if (data.status == 'ok') {
              $('#cropresult').append('<img src="'+data.ansver+'">');
              croped_photo_num++;
              $('.loader').hide(200);
            }else {
              alert('arr');
            }
          }
        });
    });
}
var croped_photo_num = 0;
$(document).ready(function(){

  var tmp = document.location.href.split('/');
  var id = tmp[tmp.length-1];
  // console.log(id);

  $('#detect').click(function () {
    $('.loader').show(200);
    var img =             $('#first_photo').attr('src');
    var api = {
      "api": {
        "token":"1234",
        "ctrl":"detection_one",
        "route":"photo",
        "img":img
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
          // console.log(data);
          if (data.status == 'ok') {
            var text = '<p> ';
            $.each(data.ansver.pages[0].blocks, function () {
              $.each(this.paragraphs, function () {
                $.each(this.words, function () {
                  $.each(this.symbols, function () {
                    // console.log(this.text);
                    text += this.text;
                  });
                  text += ' ';
                });
                text += ' </p><br><p> ';
              });
            });
            text += ' </p>';
            translate(text);
            $('.loader').hide(200);
          }else {
            alert('arr');
          }
        }
      });
  });

  $('#first_photo').click(function () {
    open_coq();
  });

  $('.select_btn').click(function () {
    open_photo_editor();
    $('#text').hide(200);
    $('#save_word').hide(200);
  });

  $('.chenge_photo').click(function () {
    $('#uploadFiles').click();
  });



  $("#uploadFiles").change(function() {
    $('.loader').show(200);
    uploadFile();
  });


});

function select_lnd() {
  alert('В Разработке!');
}

function file(text) {
  var api = {
    "api": {
      "token":"1234",
      "ctrl":"file",
      "route":"photo",
      "text":text,
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
        console.log(data);
        if (data.status == 'ok') {
          $('#save_word').attr('href', '/uploads/f'+data.ansver+'.docx');
          $('#save_word').attr('download', 'NewFile.docx');
          $('#save_word').show(200);
          $('.loader').hide(200);
        }else {
          alert('arr');
        }
      }
    });
}

function translate(text) {
  var lng = 'ru';
  if ($('#option1').prop('checked') == true) {
    lng = 'ru';
  }else if ($('#option2').prop('checked') == true) {
    lng = 'en';
  }else {
    select_lnd();
  }
  var api = {
    "api": {
      "token":"1234",
      "ctrl":"translate",
      "route":"photo",
      "text":text,
      "target": lng
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
        console.log(data);
        if (data.status == 'ok') {
          $('#text').html(data.ansver);
          file(data.ansver);
        }else {
          alert('arr');
        }
      }
    });
}





function uploadFile() {
  var file = $('#uploadFiles')[0].files[0];
  var data = new FormData();
  data.append('uploadFile', file);
  console.log(data.getAll('uploadFile')[0]);
   $.ajax({
      url: '/',
      data: data,
      cache: false,
      contentType: false,
      processData: false,
      type: 'POST',
      error: function (response) {
        console.log('error');
        console.log(response);
      },
      success: function (response) {
        console.log('success');
        console.log(response);
          // var message = file.element.find('td.message');
          if (response.status == 'ok') {
              console.log(response.text.path);
              var tmp = response.text.path.split('/');
              $('#first_photo').remove();
              $('#uploadFiles_label').append('<img id="first_photo" onclick="open_coq()" src="/uploads/'+tmp[3]+'">');
              $('#uploadFiles_BTN').remove();
              $('.loader').hide(200);
          }
          else {
              console.log(response.errors);
          }
      }
      // ,
      // xhr: function () {
      //     var xhr = $.ajaxSettings.xhr();
      //
      //     // if (xhr.upload) {
      //         // console.log('xhr upload');
      //
      //         xhr.upload.onprogress = function (e) {
      //             file.progressDone = e.position || e.loaded;
      //             file.progressTotal = e.totalSize || e.total;
      //             var prcent = (Math.floor(file.progressDone / file.progressTotal * 1000) / 10);
      //             $('#progress').val(prcent);
      //             $('#progress').text(prcent+'%');
      //             console.log('xhr.upload progress: ' + file.progressDone + ' / ' + file.progressTotal + ' = ' + (Math.floor(file.progressDone / file.progressTotal * 1000) / 10) + '%');
      //         };
      //     // }
      //     // return xhr;
      // }
      });
  }
