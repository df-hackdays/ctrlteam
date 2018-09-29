var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

mongoose.connect('mongodb://scotiahacker:gh43fbA*2GVal@ds161041.mlab.com:61041/scotiahack');
mongoose.connection.on('open', conn => console.log('info:mongo connection success'));
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('cors')());
app.use(express.static(path.join(__dirname, 'web/build')));

//app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/lecture', require('./routes/lecture'));
app.use('/api/quiz', require('./routes/quiz'));


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

// const LectureModel = require('./models/lecture');
//
// const lecture1 = new LectureModel({
//   title: 'sddf',
//   questions: [{
//     title: 'sample question',
//     choices: [{
//       answer: 'sdfsdf'
//     }],
//   }],
//   answer: 1
// });
// lecture1.save((err, doc) => console.log(err, doc));
module.exports = app;
