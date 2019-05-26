const Provider = use('Core/Provider');

class Public extends Provider {
    boot() {
        // Public Path    
        // TODO: Crerate buld path for ES6, Vue & React
        let key = "";
        switch (key) {
            case 'es6':
            case 'react':
            case 'angular':
            case 'es6':
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
    
