const sessionConfig = use('Config/Session');
const session = use('express-session');
const FileStore = use('session-file-store', session); // https://www.npmjs.com/package/session-file-store
const {Provider} = use('Core/');

class Session extends Provider {
    boot() {
        let seeeionObj = {}

        // Session Setup
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

        this.app.use(session(seeeionObj));
    }
    
    end() { }
}
    
module.exports = Session;   