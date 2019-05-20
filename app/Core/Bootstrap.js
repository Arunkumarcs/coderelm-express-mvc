const Core = require('./Core')
Core.globalsDeclaration()

let session = Core.Session()
let FileStore = use('session-file-store', session); // https://www.npmjs.com/package/session-file-store

/**
 * 
 */
module.exports = (
    app, 
    express = require('express')
) => {
    // Public Path    
    // TODO: Crerate buld path for ES6, Vue & React
    let key = "";
    switch (key) {
        case 'es6':
            app.use(express.static(BASE_PATH+'/public/build'));     
            break;
        default:
            app.use(express.static(BASE_PATH+'public'));
            break;
    }

    // Session Setup
    app.use(session({
        ...$config.Session,
        store: new FileStore({
            path: BASE_PATH+"/temp/Session",
            ...$config.SessionStorage
        }),
    }))

    // Application Route
    use('App/Router')(
        app, 
        Core.nunjucks(app)
    )
    
    // Return Sequalize Models
    return {
        models: $models
    }
}