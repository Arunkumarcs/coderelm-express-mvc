const createError = require('http-errors');
const fs = require('fs');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

module.exports = async () => {
  // view engine setup
  app.set('views', path.join(__dirname, 'resources/Views'));
  app.set('view engine', 'jade');

  // Logger
  // app.use(logger('common', {
  //   stream: fs.createWriteStream('./temp/Log/access.log', { flags: 'a' })
  // }));
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Bootstrapping 
  let { Bootstrap } = require('./core');
  await Bootstrap(app, express);
  
  return app
};