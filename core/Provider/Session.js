const sessionConfig = use('Config/Session');
const session = use('express-session');
const FileStore = use('session-file-store', session); // https://www.npmjs.com/package/session-file-store
const {Provider} = use('Core/');

class Session extends Provider {
    boot() {
        // Session Setup
        this.app.use(session({
            ...sessionConfig.options,

            store: new FileStore({
                path: BASE_PATH+"/temp/Session",
                
                ...sessionConfig.sessionStorage
            }),
        }));
    }
    
    end() { }
}
    
module.exports = Session;   
