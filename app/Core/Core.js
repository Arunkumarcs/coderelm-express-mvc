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

    static loadProviders(app, express) {
        use('Provider/Public', app, express);
        use('Provider/Session', app, express);
        use('Provider/Router', app, express);
    }
}

module.exports = Core;