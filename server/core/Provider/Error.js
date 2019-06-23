const { Provider } = use('Core/');
const config = use('Config/App');
const debug = use('debug')('coderelm-express:server');
const createError = require('http-errors');

class Error extends Provider {
    afterRoutes(app) {
        // catch 404 and forward to error handler
        app.use(function(req, res, next) {
            next(createError(404));
        });

        // error handler
        app.use(function(err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error.njk');
        });
    }

    beforeServe(server, app) {
        /**
         * Listen on provided port, on all network interfaces.
         */
        if(config.debug === true) {
            require('express-debug')(app, {
            /* settings */
            });
        }
    }

    afterServe(server, port) {
        /**
         * Event listener for HTTP server "error" event.
         */
        function onError(error) {
            if (error.syscall !== 'listen') {
            throw error;
            }

            var bind = typeof port === 'string'
            ? 'Pipe ' + port
            : 'Port ' + port;

            // handle specific listen errors with friendly messages
            switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
            }
        }

        /**
         * Event listener for HTTP server "listening" event.
         */
        function onListening() {
            var addr = server.address();  
            var bind = typeof addr === 'string'
            ? 'pipe ' + addr
            : 'port ' + addr.port;
            debug('Listening on ' + bind);
        }

        // Server Events
        server.on('error', onError);
        server.on('listening', onListening);
        console.log(`<---------------------------- Server started on port ${port} ---------------------->`)
    }
}

module.exports = Error;
    
