const { Provider } = use('Core/');
const config = use('Config/App');
class Public extends Provider {
    boot(app, express) {
        // Public Path
        switch (config.assets) {
            case 'next':
            case 'nuxt':
            case 'es6':
            case 'react':
            case 'vue':
            default:
                app.use(
                    express.static(BASE_PATH+'/public')
                );
                break;
        }    
    }
}

module.exports = Public;
    
