const Provider = use('Core/Provider');
const config = use('Config/App');

class Db extends Provider {
    boot() {
        switch (config.db) {
            case "mongoose":
                // mongoose
                break;
                
            default:
                // sequelize: mysql or postgress
                global.$models = use("Db/models");       
                break;
        }
    }

    end() { }
}

module.exports = Db;
    
