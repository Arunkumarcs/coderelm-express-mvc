const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const app = express();

// TODO: Express Session
// TODO: Implement Express Debugger
// expressDebug = require('express-debug');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
let viewEnv = nunjucks.configure(path.join(__dirname, 'resources/Views'), {
  autoescape: true,
  express: app,
  watch: true
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Router
require('./app/Config/Bootstrap')(app, viewEnv)

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

module.exports = app;
