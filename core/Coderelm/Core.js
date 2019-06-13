require('@arunkumarcoderelm/use')
const base = process.cwd();
const Providers = use('Config/Providers');
const middleware = use('Config/Middleware');

let ProviderOBJ = [];

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
    static getProviders() {
        return ProviderOBJ;
    }
    static startProviders() {
        ProviderOBJ = $_.map(Providers, (item) => {
            let providerClass = use(item);
            return new providerClass();
        });
    }

    /**
     * 
     * @param {*} app 
     * @param {*} express 
     */
    static bootProviders(app, express) {
        $_.map(ProviderOBJ, (item) => {
            if(typeof item.boot === 'function') {
                item.boot(app, express);
            }
        });
    }

    /**
     * 
     * @param {*} app 
     * @param {*} express 
     */
    static beforeRoutesProviders(app, express) {
        $_.map(ProviderOBJ, (item) => {
            if(typeof item.beforeRoutes === 'function') {
                item.beforeRoutes(app, express);
            }
        });
    }

    /**
     * 
     * @param {*} app 
     * @param {*} express 
     */
    static afterRoutesProviders(app, express) {
        $_.map(ProviderOBJ, (item) => {
            if(typeof item.afterRoutes === 'function') {
                item.afterRoutes(app, express);
            }
        });
    }

    /**
     * 
     * @param {*} server 
     * @param {*} app 
     */
    static async beforeServeProviders(server, app) {
        await $_.map(ProviderOBJ, (item) => {
            if(typeof item.beforeServe === 'function') {
                item.beforeServe(server, app);
            }
        });
    }

    /**
     * 
     * @param {*} server 
     */
    static async afterServeProviders(server) {
        await $_.map(ProviderOBJ, (item) => {
            if(typeof item.afterServe === 'function') {
                item.afterServe(server);
            }
        });
    }

    /**
     * 
     * @param {*} server 
     */
    static async endProviders(server) {
        await $_.map(ProviderOBJ, (item) => {
            if(typeof item.end === 'function') {
                item.end(server);
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