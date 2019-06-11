require('@arunkumarcoderelm/use')
const base = process.cwd();
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
        global.$moment   = use('moment');
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
            return new providerClass();
        });
        
        // boot
        $_.map(Provider, (item) => {
            if(typeof item.boot === 'function') {
                item.boot(app, express);
            }
        });

        // end
        $_.map(Provider, (item) => {
            if(typeof item.end === 'function') {
                item.end(app, express);
            }
        });
    }

    /**
     * 
     * @param {*} app 
     * @param {*} express 
     */
    static loadMiddleware(app) {
        // Initialize
        $_.map(middleware, (item) => {
            let middlewareClass = use(item);
            let middlewareObj = new middlewareClass();
            
            if (typeof middlewareObj.boot === 'function') {
                middlewareObj.boot(app);
            }
        });
    }
}

module.exports = Core;