const Provider = use('Core/Provider');
const config = use('Config/App');

class Public extends Provider {
    boot() {
        // Public Path
        switch (config.assets) {
            case 'react':
                this.app.use(
                    this.express.static(BASE_PATH+'/public/react-build')
                );     
                break;
            case 'es6':
                this.app.use(
                    this.express.static(BASE_PATH+'/public/build')
                );     
                break;
            case 'vue':
                this.app.use(
                    this.express.static(BASE_PATH+'/public/vue-build')
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
    
