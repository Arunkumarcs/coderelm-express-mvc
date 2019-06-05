const { Core, Middleware } = use('Core/');
const nunjucks = use('nunjucks');

// Nunjuck Middleware
class Nunjuck extends Middleware {
    boot() {
        let self = this;

        let view = nunjucks.configure(
            `${BASE_PATH}/resources/Views`, {
                autoescape: true,
                express: self.app,
                watch: true
            }
        );
        
        self.app.use((req, res, next) => {
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