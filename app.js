

var express = require('express');
var app = express();
var http = require('http').Server(app) ;
var io = require('socket.io')(http) ;
var net = require('net') ;

var favicon = require('serve-favicon');

app.use(favicon(__dirname + '/favicon.ico'));

var userIDs = []


module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],

    files: [
      'public/*.js'
    ]
  });
};

app.get('/', function(req, res) {
   res.sendfile('./test.html');
});

app.use(express.static('public'));

http.listen(8888)
console.log('Listening on port 8888');


process.on('uncaughtException', function (err) {
    console.log(err);
}); 

io.on('connection', function(socket){
	console.log('a user connected');
	socket.on('disconnect', function(){
		console.log('user disconnected');
	});
	socket.on('test', function(msg){
		var indexID = userIDs.length
		userIDs[indexID] = msg
		io.emit('test', userIDs) ;
		console.log(userIDs) ;
	});
	socket.on('play', function(data){
		io.emit('play', data)
	})

});