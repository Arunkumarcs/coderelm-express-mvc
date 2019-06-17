class Controller {
    constructor() {
        this.$theme = "";
        this.$time = {
            format: $moment().format('YYYY-MM-DD HH:MM:SS'),
            unix: $moment().unix(),
            year: $moment().format('YYYY'),
            month: $moment().format('MM'),
            date: $moment().format('DD'),
            hour: $moment().format('HH'),
            minuit: $moment().format('MM'),
            sec: $moment().format('SS')
        };
    }

    /**
     * Render Theme Files
     * @param {*} res 
     * @param {*} page 
     * @param {*} obj 
     */
    render(
        res, 
        page, 
        obj = {}
    ) {
        res.render(
            `themes/${this.$theme}/${page}.njk`,
            obj
        );
    }

    /**
     * Render Plugin Files
     * @param {*} res 
     * @param {*} page 
     * @param {*} obj 
     */
    renderPlugin(
        res,
        page, 
        obj = {}
    ) {
        res.render(
            `plugins/${this.$theme}/${page}.njk`,
            obj
        );
    }

    /**
     * Render Json
     * @param {*} res 
     * @param {*} obj 
     */
    renderJson(res, obj = {})
    {
        res.json(obj);
    }
}

module.exports = Controller;