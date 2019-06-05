const App = require('./Interface/App');

class Middleware extends App {
    constructor(app) {
        super(app);
    }
}

module.exports = Middleware;