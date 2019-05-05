const createError = require('http-errors');
const fs = require('fs');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// TODO: Express Session

// view engine setup
app.set('views', path.join(__dirname, 'resources/Views'));
app.set('view engine', 'jade');

// Logger
// app.use(logger('common', {
//   stream: fs.createWriteStream('./resources/Log/access.log', { flags: 'a' })
// }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Bootstrapping 
var {models} = require('./core/Bootstrap')(app)

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
  res.render('error.njk');
});

module.exports = {
  app,
  models
};
