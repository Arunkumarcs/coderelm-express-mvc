const session = use('express-session');
const FileStore = use('session-file-store', session); // https://www.npmjs.com/package/session-file-store
const Provider = use('Core/Provider');

class Session extends Provider {
    boot() {
        // Session Setup
        this.app.use(session({
            ...$config.Session,
            store: new FileStore({
                path: BASE_PATH+"/temp/Session",
                ...$config.SessionStorage
            }),
        }));
    }
    
    end() { }
}
    
module.exports = Session;   
