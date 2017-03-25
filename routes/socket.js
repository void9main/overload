var express = require('express');
var router = express.Router();
var io = require('socket.io');
var net = require('net');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('socket');
});
module.exports = router;
