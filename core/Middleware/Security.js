const { Middleware } = use('Core/');
const helmet = use('helmet');

class Security extends Middleware {
    boot(app) {
        app.use((req, res, next) => {
            // console.log("\n****************************************************\n");
            // console.log(req.body);
            // console.log(req.query);
            // console.log(req.params);
            // console.log(req.originalUrl);
            Promise.reject().catch(next);
        });
    
        // Security Middleware
        app.use(helmet());
    }
}

module.exports = Security;