require('@arunkumarcoderelm/use')
const base = process.cwd();
const nunjucks = use('nunjucks');

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
        global.$models   = use("Db/models");
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
        let Providers = use('Config/Providers.json');

        // Initialize
        Providers = $_.map(Providers, (item) => {
            let providerClass = use(item);
            return new providerClass(app, express);
        });
        
        // boot
        $_.map(Providers, (item) => {
            if(typeof item.boot === 'function') {
                item.boot();
            }
        });

        // end
        $_.map(Providers, (item) => {
            if(typeof item.end === 'function') {
                item.end();
            }
        });
    }
}

module.exports = Core;