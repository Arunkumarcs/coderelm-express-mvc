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
    }
}

module.exports = Controller