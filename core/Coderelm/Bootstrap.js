const Core = require('./Core');
Core.globalsDeclaration();

/**
 * 
 */
module.exports = (
    app, 
    express = require('express')
) => {
    Core.startProviders();
    Core.bootProviders(app, express);
    
    // Return Sequalize Models
    return {
        models: $models || ""
    };
};