const { Core, Middleware } = use('Core/');
const nunjucks = use('nunjucks');

// Nunjuck Middleware
class Nunjuck extends Middleware {
    boot(app) {
        
        let view = nunjucks.configure(
            `${BASE_PATH}/resources/Views`, {
                autoescape: true,
                express: app,
                watch: true
            }
        );
        
        app.use((req, res, next) => {
            use(
                'Library/Nunjuck', 
                view,
                req, 
                res
            );
            next();
        });
    }
}
    
module.exports = Nunjuck;