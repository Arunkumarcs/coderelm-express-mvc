const Core = require('./Core')
Core.globalsDeclaration()

/**
 * 
 */
module.exports = (app) => {
    // let Controller = use('Core/Controller')
    // Controller = new Controller()
    // Controller.do({method: 'test'}, 'asd')

    // TODO: Database Integration using Sequalize
    use('App/Router')(
        app, 
        Core.nunjucks(app)
    )
}