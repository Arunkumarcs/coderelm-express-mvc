const Core = require('./Core');
Core.globalsDeclaration();

/**
 * 
 */
module.exports = (
    app, 
    express = require('express')
) => {
    Core.loadProviders(app, express);
    
    // Return Sequalize Models
    return {
        models: $models
    };
};