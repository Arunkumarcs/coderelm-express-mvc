const App = require('./Interface/App');

class Middleware extends App {
    constructor(app, express) {
        super(app);
        this.express = express;
    }
}

module.exports = Middleware;