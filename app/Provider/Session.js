const session = use('express-session');
const FileStore = use('session-file-store', session); // https://www.npmjs.com/package/session-file-store

module.exports = (app, express) => {
    // Session Setup
    app.use(session({
        ...$config.Session,
        store: new FileStore({
            path: BASE_PATH+"/temp/Session",
            ...$config.SessionStorage
        }),
    }));
};
    
