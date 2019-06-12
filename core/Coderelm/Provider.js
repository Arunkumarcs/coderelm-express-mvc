const App = require('./Interface/App');

class Provider extends App {
    constructor() {
        super();
    }

    // static boot() {}
    static beforeRoute() {}
    static afterRoute() {}
    static beforeServerCreate() {}
    static afterServerCreate() {}
    static beforeServerListen() {}
    static afterServerListen() {}
    // static end() {}
}

module.exports = Provider;