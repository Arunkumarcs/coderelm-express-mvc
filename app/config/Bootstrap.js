let base = process.cwd()
let nameSpace = require(`${base}/package.json`)['autoload']

/**
 * 
 */
global.use = (pack, ...par) => {
    for (let variable in nameSpace) {
        if (pack.startsWith(variable + '/')) {
            pack = pack.replace(
                variable + '/', 
                base +'/'+ nameSpace[variable]
            )
        }
    }

    if (par.length > 0) {
        return require(pack)(...par);
    } else {
        return require(pack);
    }
}

module.exports = (app, viewEnv) => {
    // TODO: Database Integration using Sequalize
    use('App/Router')(app, viewEnv)
}