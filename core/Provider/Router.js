const {Core, Provider} = use('Core/');
const config = use('Config/App');

class Router extends Provider {
    boot(app) {
        // Global Middleware
        Core.loadMiddleware(app);

        // before Routes Provider
        Core.beforeRoutesProviders(app);

        // Routes
        use('App/Router')(app);

        // Rendering Single Page APP
        this.assetsRoutes(app);

        // After Routes Provider
        Core.afterRoutesProviders(app);
    }
    
    assetsRoutes(app) {
        switch (config.assets) {
            case 'vue':
            case 'es6':
            case 'react':
                /* GET home page. */
                app.all('/*',  (req, res) => {
                    res.sendFile(BASE_PATH + '/dist/index.html');
                    res.end();
                });
                break;
            case 'nuxt':
            case 'next':
            default:
                break;
        }

    }
}
    
module.exports = Router;   
