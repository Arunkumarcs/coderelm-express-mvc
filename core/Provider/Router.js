const {Core, Provider} = use('Core/');

class Router extends Provider {
    boot(app) {
        // Global Middleware
        Core.loadMiddleware(app);

        // Routes
        use('App/Router')(app);
    }
    
    end() { }
}
    
module.exports = Router;   
