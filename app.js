var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var get2=require('./routes/get2');
var jstd=require('./routes/jstd');
var yxxy=require('./routes/yxxy');
var wzgd=require('./routes/wzgd');
var xwdt=require('./routes/xwdt');
var students=require('./routes/students');
var msxy=require('./routes/msxy');
var yyxy=require('./routes/yyxy');
var zhxy=require('./routes/zhxy');
var gjjl=require('./routes/gjjl');
var snav=require('./routes/snav');
var teacher=require('./routes/teacher');
var team=require('./routes/team');
var news=require('./routes/news');
var learn=require('./routes/learn');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/about',get2);
app.use('/jstd',jstd);
app.use('/yxxy',yxxy);
app.use('/wzgd',wzgd);
app.use('/xwdt',xwdt);
app.use('/students',students);
app.use('/msxy',msxy);
app.use('/yyxy',yyxy);
app.use('/zhxy',zhxy);
app.use('/gjjl',gjjl);
app.use('/snav',snav);
app.use('/teacher',teacher);
app.use('/team',team);
app.use('/news',news);
app.use('/learn',learn);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen('8005',function () {
  console.log('serve start......')
})

module.exports = app;
