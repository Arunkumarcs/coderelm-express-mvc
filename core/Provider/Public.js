const { Provider } = use('Core/');
const config = use('Config/App');

class Public extends Provider {
    boot() {
        // Public Path
        switch (config.assets) {
            case 'es6':
            case 'react':
            case 'vue':
                this.app.use(
                    this.express.static(BASE_PATH+'/dist')
                );     
                break;
            default:
                this.app.use(
                    this.express.static(BASE_PATH+'public')
                );
                break;
        }    
    }

    end() { }
}

module.exports = Public;
    
