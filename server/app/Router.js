// Router Obj
const indexRouter = use('Routes/index');
// const usersRouter = use('Routes/users');
const ajaxRouter = use('Routes/ajax');

module.exports = (app) => {
    // Application Routes
    app.use('/ajax', ajaxRouter);
    app.use('/', indexRouter);
}