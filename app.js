var express                    = require('express');
var session                    = require('express-session');
var SessionStore               = require('express-mysql-session');
var http                       = require('http');
var connect                    = require('connect');
var path                       = require('path');
var app                        = express();
var fs                         = require("fs");
// var gm                         = require('gm').subClass({imageMagick: true});
multiparty                     = require('multiparty');
var bodyParser                 = require("body-parser");
var jsonParser                 = bodyParser.json();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var api                        = require('./api');
const mysql                    = require("mysql");
const dbSettings               = require("./db_settings.js");
const config                   = require("./config.js");
const connection               = mysql.createConnection(dbSettings);





connection.connect();

app.use(express.static(__dirname + '/client'));
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: new SessionStore(dbSettings)
}));



app.get('/', function (req, res, next) {
  console.log(req.session);
  if (req.session.auth == true) {
    res.render('index',{
      type: 1,
      content:'profile'
    });
  }else {
    res.render('logged',{
      content:'login'
    });
  }
});

app.get('/:params/:phone', function (req, res, next) {
  console.log(req.session);
  if (req.session.auth == true) {
    res.render('index',{
      type: 2,
      content:req.params["params"],
      phone: req.params["phone"]
    });
  }else {
    res.render('logged',{
      content:'login'
    });
  }
});





app.get('/:params', function (req, res, next) {
  console.log(req.session);
  if (req.params["params"] == 'api') {
    next();
  }else {
    console.log('Открыта страница: '+req.params["params"]);
    if (req.session.auth == true) {
      console.log(req.session.emp);
      res.render('index',{
        type: 1,
        content:req.params["params"],
        phone: req.session.phone,
        emp: req.session.emp
      });
    }else {
      if (req.params["params"] == 'password') {
        res.render('logged',{
          content:'password'
        });
      }else if (req.params["params"] == 'signup') {
        res.render('logged',{
          content:'signup'
        });
      }else {
        res.render('logged',{
          content:'login'
        });
      }
    }
  }
});

app.post('/api', jsonParser, function (req, res) {
    api.ctrl(req.body.api, function (ansver) {
      if (ansver.status == 'login') {
        req.session.auth = true;
        req.session.phone = req.body.api.phone;
        req.session.emp = ansver.ansver[0];
        res.json(req.session);
      }else if (ansver.status == 'logout') {
        req.session.auth = false;
        req.session.phone = 0;
        res.json(req.session);
      }else {
        res.json(ansver);
      }
    });
});

app.post('/', function(req, res, next) {
  console.log(req);
  console.log('///----');
    // создаем форму
    var form = new multiparty.Form();
    //здесь будет храниться путь с загружаемому файлу, его тип и размер
    var uploadFile = {uploadPath: '', type: '', size: 0};
    //максимальный размер файла
    var maxSize = 20 * 1024 * 1024; //20MB
    //поддерживаемые типы(в данном случае это картинки формата jpeg,jpg и png)
    var supportMimeTypes = ['image/jpg', 'image/jpeg', 'image/png'];
    //массив с ошибками произошедшими в ходе загрузки файла
    var errors = [];
    form.keepExtensions = false;
    form.type = 'multipart/form-data';
    form.multiples = true;

     //если произошла ошибка
    form.on('error', function(err){
      console.log(err);
        if(fs.existsSync(uploadFile.path)) {
            //если загружаемый файл существует удаляем его
            fs.unlinkSync(uploadFile.path);
            console.log('error');
        }
    });

    form.on('close', function() {
      console.log('close');
        //если нет ошибок и все хорошо
        if(errors.length == 0) {
            //сообщаем что все хорошо
            res.send({status: 'ok', text: uploadFile});
        }
        else {
            if(fs.existsSync(uploadFile.path)) {
                //если загружаемый файл существует удаляем его
                fs.unlinkSync(uploadFile.path);
            }
            //сообщаем что все плохо и какие произошли ошибки
            res.send({status: 'bad', errors: errors});
        }
    });

    // при поступление файла
    form.on('part', function(part) {
      console.log('Загружаем фото');
        //читаем его размер в байтах
        uploadFile.size = part.byteCount;
        //читаем его тип
        uploadFile.type = part.headers['content-type'];
        //путь для сохранения файла
        uploadFile.path = './client/uploads/' + part.filename;

        //проверяем размер файла, он не должен быть больше максимального размера
        if(uploadFile.size > maxSize) {
            errors.push('File size is ' + uploadFile.size + '. Limit is' + (maxSize / 1024 / 1024) + 'MB.');
        }

        //проверяем является ли тип поддерживаемым
        if(supportMimeTypes.indexOf(uploadFile.type) == -1) {
            errors.push('Unsupported mimetype ' + uploadFile.type);
        }

        //если нет ошибок то создаем поток для записи файла
        if(errors.length == 0) {
            var out = fs.createWriteStream(uploadFile.path);
            part.pipe(out);
        }
        else {
            //пропускаем
            //вообще здесь нужно как-то остановить загрузку и перейти к onclose
            part.resume();
        }
    });

    // парсим форму
    form.parse(req);
});

app.listen(config.port, (err) => {
		if (err) return console.log("Ошибка запуска сервера:" + err.message);
		console.log('Проект запущен на '+config.port+' порт');
});
