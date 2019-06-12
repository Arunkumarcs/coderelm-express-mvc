const sessionConfig = use('Config/Session');
const {Provider} = use('Core/');

class Session extends Provider {
    boot(app) {
        let seeeionObj = {}

        // if session enabled
        if(sessionConfig.enabled) {
            const exSession = use('express-session');
            const FileStore = use('session-file-store', exSession); // https://www.npmjs.com/package/session-file-store

            // Session storage is enabled Setup
            if(sessionConfig.enableSessionStorage) {
                seeeionObj = {
                    ...sessionConfig.options,
        
                    store: new FileStore({
                        path: BASE_PATH+"/temp/Session",
                        
                        ...sessionConfig.sessionStorage
                    }),
                }
            } else {
                seeeionObj = {
                    ...sessionConfig.options
                }
            }

            // adding session middleware
            app.use(exSession(seeeionObj));
        }
    }
    
    end() { }
}
    
module.exports = Session;   