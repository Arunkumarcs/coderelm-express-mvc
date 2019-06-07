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
    static async loadProviders(app, express) {
        // Initialize
        let Provider = await $_.map(Providers, (item) => {
            let providerClass = use(item);
            return new providerClass(app, express);
        });
        
        // boot
        await $_.map(Provider, async (item) => {
            if(typeof item.boot === 'function') {
                await item.boot();
            }
        });

        // end
        await $_.map(Provider, async (item) => {
            if(typeof item.end === 'function') {
                await item.end();
            }
        });
    }

    /**
     * 
     * @param {*} app 
     * @param {*} express 
     */
    static async loadMiddleware(app, viewEnv) {
        // Initialize
        await $_.map(middleware, async (item) => {
            let middlewareClass = use(item);
            let middlewareobj = new middlewareClass(app, viewEnv);
            
            if(typeof middlewareobj.boot === 'function') {
                await middlewareobj.boot();
            }
        });
    }
}

module.exports = Core;