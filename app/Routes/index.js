const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if( req.session.test !== undefined) {
    req.session.test += 1
  } else {
    req.session.test = 1
  }

  res.render('index.njk', { title: 'Express' });
});

module.exports = router;
