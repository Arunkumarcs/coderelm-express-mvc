const { Provider } = use('Core/');
const config = use('Config/App');

class Public extends Provider {
    boot() {
        // Public Path
        switch (config.assets) {
            case 'next':
            case 'nuxt':
                break;
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

    // Single Page Application
    static dist(router) {
        switch (config.assets) {
            case 'vue':
            case 'es6':
            case 'react':
                /* GET home page. */
                router.all('/*',  (req, res) => {
                    res.sendFile(BASE_PATH + '/dist/index.html');
                    res.end();
                });
                break;
            case 'nuxt':
            case 'next':
            default:
                break;
        }
    }
}

module.exports = Public;
    
