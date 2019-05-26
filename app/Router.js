const helmet = use('helmet');

// TODO: FIix csurf Plugin
// const csurf = use('csurf');

// Router Obj
// const api = use('Routes/Api');
const indexRouter = use('Routes/index');
const usersRouter = use('Routes/users');

module.exports = (app, viewEnv) => {
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
    
    // API Routes
    // app.use('/api/', api);

    // TODO: FIix csurf Plugin
    // app.use(csurf());

    // Nunjuck Middleware
    app.use((req, res, next) => {
        use('Library/Nunjuck', viewEnv, req, res);
        next();
    });

    // Application Routes
    app.use('/', indexRouter);
    app.use('/users', usersRouter);
}