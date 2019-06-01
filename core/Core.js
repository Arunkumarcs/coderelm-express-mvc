require('@arunkumarcoderelm/use')
const base = process.cwd();
const nunjucks = use('nunjucks');
const Providers = use('Config/Providers');
const middleware = use('Config/Middleware');

/**
 * Core
 */
class Core {
    static globalsDeclaration() {
        // $config
        global.BASE_PATH = base;
        global.$_        = use('lodash');
        global.$config   = use('config');
        global.$moment   = use('moment');
    }

    /**
     * Initialize View Engine
     * @param {*} app 
     */
    static nunjucks(app) {
        return nunjucks.configure(
            `${base}/resources/Views`, 
            {
                autoescape: true,
                express: app,
                watch: true
            }
        );
    }

    /**
     * 
     * @param {*} app 
     * @param {*} express 
     */
    static loadProviders(app, express) {
        // Initialize
        let Provider = $_.map(Providers, (item) => {
            let providerClass = use(item);
            return new providerClass(app, express);
        });
        
        // boot
        $_.map(Provider, (item) => {
            if(typeof item.boot === 'function') {
                item.boot();
            }
        });

        // end
        $_.map(Provider, (item) => {
            if(typeof item.end === 'function') {
                item.end();
            }
        });
    }

    /**
     * 
     * @param {*} app 
     * @param {*} express 
     */
    static loadMiddleware(app, viewEnv) {
        // Initialize
        $_.map(middleware, (item) => {
            let middlewareClass = use(item);
            let middlewareobj = new middlewareClass(app, viewEnv);
            
            if(typeof middlewareobj.boot === 'function') {
                middlewareobj.boot();
            }
        });
    }
}

module.exports = Core;