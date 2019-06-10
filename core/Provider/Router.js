const {Core, Provider} = use('Core/');

class Router extends Provider {
    boot() {
        // Global Middleware
        Core.loadMiddleware(this.app);

        // Routes
        use('App/Router')(this.app);
    }
    
    end() { }
}
    
module.exports = Router;   
