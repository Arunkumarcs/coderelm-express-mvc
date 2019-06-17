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
};