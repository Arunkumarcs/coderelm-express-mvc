const Core = require('./Core');
Core.globalsDeclaration();

/**
 * 
 */
module.exports = (
    app, 
    express = require('express')
) => {
    use('Provider/Public', app, express);
    use('Provider/Session', app, express);
    use('Provider/Router', app, express);
    
    // Return Sequalize Models
    return {
        models: $models
    };
};