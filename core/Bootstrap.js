const Core = require('./Core')
Core.globalsDeclaration()

let session = Core.Session()
let FileStore = use('session-file-store', session); // https://www.npmjs.com/package/session-file-store

/**
 * 
 */
module.exports = (app) => {
    // TODO: Database Integration using Sequalize

    // Session Setup
    app.use(session({
        ...$config.Session,
        store: new FileStore({
            path: BASE_PATH+"/resources/Session",
            ...$config.SessionStorage
        }),
    }))

    // Application Route
    use('App/Router')(
        app, 
        Core.nunjucks(app)
    )
    
    return {
        models: $models
    }
}