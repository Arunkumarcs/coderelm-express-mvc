const helmet = use('helmet');

// TODO: FIix csurf Plugin
// const csurf = use('csurf');

// Router Obj
// const api = use('Routes/Api');
const indexRouter = use('Routes/index');
const usersRouter = use('Routes/users');

module.exports = (app, viewEnv) => {
    // Middleware
    app.use((req, res, next) => {
        // console.log("\n****************************************************\n");
        // console.log(req.body);
        // console.log(req.query);
        // console.log(req.params);
        // console.log(req.originalUrl);
        Promise.reject().catch(next);
    });
    app.use(helmet());
    
    /**
     * API ROUTES
     */
    // app.use('/api/', api);
    // TODO: FIix csurf Plugin
    // app.use(csurf());
    app.use((req, res, next) => {
        use('Library/Nunjuck', viewEnv, req, res)
        next()
    })


    app.use('/', indexRouter);
    app.use('/users', usersRouter);
}