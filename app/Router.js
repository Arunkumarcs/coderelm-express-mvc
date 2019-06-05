
const {Core} = use('Core/');

// Router Obj
const indexRouter = use('Routes/index');
const usersRouter = use('Routes/users');

module.exports = (app, viewEnv) => {
    // Application Routes
    app.use('/users', usersRouter);
    app.use('/', indexRouter);
}