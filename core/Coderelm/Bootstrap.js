const Core = require('./Core');
Core.globalsDeclaration();

/**
 * 
 */
module.exports = async (
    app, 
    express = require('express')
) => {
    await Core.loadProviders(app, express);
    
    // Return Sequalize Models
    return {
        models: $models
    };
};