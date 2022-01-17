var server     = require('http').createServer(),
    io         = require('socket.io')(server),
    logger     = require('winston'),
    port       = 3000;

logger.info('SocketIO > listening on port ' + port);



io.on('connection', function (socket){
    logger.info('SocketIO > Connected socket ' + socket.id);
    socket.on('broadcast', function (data) {
        io.emit('server' , data);
    });

    socket.on('disconnect', function () {
        logger.info('SocketIO > Disconnected socket ' + socket.id);
    });
});
server.listen(port);