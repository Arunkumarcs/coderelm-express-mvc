// Router Obj
const indexRouter = use('Routes/index');
const usersRouter = use('Routes/users');

module.exports = (app) => {
    // Application Routes
    app.use('/users', usersRouter);
    app.use('/', indexRouter);
}