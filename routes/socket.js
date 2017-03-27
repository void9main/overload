var express = require('express');
var app=express();
var router = express.Router();
var net = require('net');
var http=require("http");
var sio=require("socket.io");
var server=http.createServer(app);
var fs=require("fs");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('socket');
  var socket=sio.listen(server);
  socket.on("connection", function (socket) {
    socket.emit("news",{hello:"你好"});
    socket.on("otherEvent", function (data) {
	    console.log(data);
	  });
  });
  server.listen(3303);
});
module.exports = router;
