module.exports = (app, express) => {
    // Public Path    
    // TODO: Crerate buld path for ES6, Vue & React
    let key = "";
    switch (key) {
        case 'es6':
        case 'react':
        case 'angular':
        case 'es6':
            app.use(express.static(BASE_PATH+'/public/build'));     
            break;
        default:
            app.use(express.static(BASE_PATH+'public'));
            break;
    }
};
    
