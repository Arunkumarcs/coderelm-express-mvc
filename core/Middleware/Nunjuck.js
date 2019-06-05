const { Middleware } = use('Core/');

// Nunjuck Middleware
class Nunjuck extends Middleware {
    boot() {
        let self = this;
        
        self.app.use((req, res, next) => {
            use('Library/Nunjuck', self.viewEnv, req, res);
            next();
        });
    }
}
    
module.exports = Nunjuck;