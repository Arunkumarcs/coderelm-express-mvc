const { Provider } = use('Core/');
let socketConfig = use('Config/Socket');

class Socket extends Provider {
    beforeServe(server) {
        if(socketConfig.enabled === true) {
          var io = require('socket.io')(server, socketConfig.options);
          use('Core/Socket', io);
        }
    }
}
    
module.exports = Socket;   
