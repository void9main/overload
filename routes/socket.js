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
    socket.on("msg_one", function (data) {
	    socket.emit("message_o",{say:data,sex:"man"});
			socket.emit("message_t",{say:data,sex:"man"});
	  });
	socket.on("msg_two", function (data) {
	    socket.emit("message_o",{say:data,sex:"woman"});
			socket.emit("message_t",{say:data,sex:"woman"});
	  });
  });
  server.listen(3303);
});
module.exports = router;
