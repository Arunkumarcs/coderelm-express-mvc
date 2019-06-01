const Provider = use('Core/Provider');
const config = use('Config/App');

class Public extends Provider {
    boot() {
        // Public Path    
        // TODO: Crerate buld path for ES6, Vue & React
        switch (config.assets) {
            case 'es6':
            case 'react':
            case 'angular':
                this.app.use(
                    this.express.static(BASE_PATH+'/public/build')
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
    
