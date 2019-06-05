const {Core, Provider} = use('Core/');

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
