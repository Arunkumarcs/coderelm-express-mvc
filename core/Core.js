require('@arunkumarcoderelm/use')
const base = process.cwd()
const nunjucks = use('nunjucks')
const session = use('express-session')

/**
 * Core
 */
class Core {
    static globalsDeclaration() {
        // $config
        global.BASE_PATH = base
        global.$config = use('config')
        global.$moment = use('moment')
        global.$_ = use('lodash')
        global.$models = use("Db/models");
    }

    /**
     * Session
     */
    static Session() {
        return session
    }

    /**
     * Initialize View Engine
     * @param {*} app 
     */
    static nunjucks(app) {
        return nunjucks.configure(
            `${base}/resources/Views`, {
                autoescape: true,
                express: app,
                watch: true
            }
        )
    }
}

module.exports = Core