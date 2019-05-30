const App = use('Core/Interface/App');

class Provider extends App {
    constructor(app, express) {
        super(app);
        this.express = express;
    }
}

module.exports = Provider;