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
	    socket.emit("message_o",{hello:data});
			socket.emit("message_t",{hello:data});
	  });
	socket.on("msg_two", function (data) {
	    socket.emit("message_o",{hello:data});
			socket.emit("message_t",{hello:data});
	  });
  });
  server.listen(3303);
});
module.exports = router;
