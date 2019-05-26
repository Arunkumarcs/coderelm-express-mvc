const Middleware = use('Core/Middleware');
const helmet = use('helmet');

// TODO: Fix csurf Plugin
// const csurf = use('csurf');

// TODO: GraphQl API
// const api = use('Routes/Api');

class Security extends Middleware {
    boot() {
        this.app.use((req, res, next) => {
            // console.log("\n****************************************************\n");
            // console.log(req.body);
            // console.log(req.query);
            // console.log(req.params);
            // console.log(req.originalUrl);
            Promise.reject().catch(next);
        });
    
        // Security Middleware
        this.app.use(helmet());
        
        // TODO: GraphQl API
        // this.app.use('/api/', api);
    
        // TODO: Fix csurf Plugin
        // this.app.use(csurf());
    }
}

module.exports = Security;