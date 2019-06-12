const { Provider } = use('Core/');
const config = use('Config/Db');
const env = process.env.NODE_ENV || 'development';

class Db extends Provider {
    boot() {
        switch (config.db) {
            case "sequelize":
                // sequelize: mysql or postgress
                global.$models = use("Db/models");       
                break;
            case "mongoose":
                // mongoose
                const mongoose = use('mongoose');
                mongoose.connect(
                    config.mongoose[env].connection, 
                    config.mongoose[env].options
                );
            default:     
                global.$models = null;
                break;
        }
    }

    end() { }
}

module.exports = Db;
    
