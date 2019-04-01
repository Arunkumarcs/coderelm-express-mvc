const proxyHandler = use('Core/ProxyHandler')

class Controller 
{
    constructor () 
    {
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

        // set proxy obj
        return new Proxy(this, proxyHandler);
    }

    /**
     * 
     * @param {*} param0 
     * @param  {...any} par 
     */
    do(
        {
            method,
            before = (obj, method, ...pars) => {
                obj[method](...pars)
            }
        }, ...par
    ) {
        if (this[method] === undefined) {
            throw Error(`Undefined Method "${method}"`)
        } else {
            before(this, method, ...par)
        }
    }
}

module.exports = Controller