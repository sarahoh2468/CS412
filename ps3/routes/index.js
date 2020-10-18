const express = require('express');
const router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'cs412' });
});

module.exports = router;
