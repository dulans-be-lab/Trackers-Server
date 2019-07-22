const io = require('socket.io');
function ioConnection(io) {
    if (!(this instanceof ioConnection)) {
        return new ioConnection(io);
    }
    this.io = io;
}

ioConnection.prototype.createConnection = function () {
    this.io.on('connection', function (socket) {
        console.log('Trackers realTime update System active')

        socket.on('message', (message) => {
            console.log(message);
        });

        socket.on('disconnect', function () {
            console.log("user " + socket.id + " disconnect");
        });
    });

}

module.exports = ioConnection;
