
const Core = use('Core/Core');

// Router Obj
const indexRouter = use('Routes/index');
const usersRouter = use('Routes/users');

module.exports = (app, viewEnv) => {
    Core.loadMiddleware(app, viewEnv);

    // Application Routes
    app.use('/users', usersRouter);
    app.use('/', indexRouter);
}