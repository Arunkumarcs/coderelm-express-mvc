const proxyHandler = use('Core/ProxyHandler')

class Controller {
    constructor() {
        this.$theme = null
        this.$time = {
            format: $moment().format('YYYY-MM-DD HH:MM:SS'),
            unix: $moment().unix(),
            year: $moment().format('YYYY'),
            month: $moment().format('MM'),
            date: $moment().format('DD'),
            hour: $moment().format('HH'),
            minuit: $moment().format('MM'),
            sec: $moment().format('SS')
        }
    }

    /**
     * Render Theme Files
     * @param {*} param0 
     * @param {*} page 
     * @param {*} obj 
     */
    render({
        req = {},
        res = {}
    }, page, obj = {}) {
        res.render(
            `themes/${this.$theme}/${page}.njk`,
            obj
        );
    }

    /**
     * Render Plugin Files
     * @param {*} param0 
     * @param {*} page 
     * @param {*} obj 
     */
    renderPlugin({
        req = {},
        res = {}
    }, page, obj = {}) {
        res.render(
            `plugins/${this.$theme}/${page}.njk`,
            obj
        );
    }

    /**
     * Render Json
     * @param {*} obj 
     */
    renderJson(obj)
    {
        res.json(obj)
    }
}

module.exports = Controller