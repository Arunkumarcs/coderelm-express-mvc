module.exports = (app, express) => {
    use('App/Router')(
        app, 
        Core.nunjucks(app)
    );
};   
