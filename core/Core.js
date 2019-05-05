const base = process.cwd()
const nameSpace = require(`${base}/package.json`)['autoload']
const nunjucks = require('nunjucks')
const session = require('express-session')

/**
 * Core
 */
class Core {
    static globalsDeclaration() {
        Core.useDeclaration()

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
     * use instead of require
     */
    static useDeclaration() {
        global.use = (pack, ...par) => {
            for (let variable in nameSpace) {
                if (pack.startsWith(variable + '/')) {
                    pack = pack.replace(
                        variable + '/',
                        base + '/' + nameSpace[variable]
                    )
                }
            }

            if (par.length > 0) {
                return require(pack)(...par)
            } else {
                return require(pack)
            }
        }
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