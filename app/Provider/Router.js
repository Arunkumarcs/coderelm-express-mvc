const Core = use('Core/Core');
const Provider = use('Core/Provider');

class Router extends Provider {
    boot() {
        use('App/Router')(
            this.app, 
            Core.nunjucks(this.app)
        );
    }
    
    end() { }
}
    
module.exports = Router;   
