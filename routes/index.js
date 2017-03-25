var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'overload',content:'点击开始试用',des:'基于socket.io的即时通讯系统'});
});

module.exports = router;
