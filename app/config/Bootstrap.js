const Core = require('./Core')
Core.globalsDeclaration()


/**
 * 
 */
module.exports = (app) => {
    // TODO: Database Integration using Sequalize
    use('App/Router')(
        app, 
        Core.nunjucks(app)
    )
}