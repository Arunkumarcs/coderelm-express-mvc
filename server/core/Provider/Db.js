const { Provider } = use('Core/');
const config = use('Config/Db');
const env = process.env.NODE_ENV || 'development';

class Db extends Provider {
    boot() {
        switch (config.db) {
            case "sequelize":
                // sequelize: mysql or postgress
                global.$Db = use("Db/models");       
                break;
            case "mongoose":
                // mongoose
                const mongoose = use('mongoose');
                global.$Db = mongoose.connect(
                    config.mongoose[env].connection, 
                    config.mongoose[env].options
                );
                break;
            default:     
                global.$Db = null;
                break;
        }
    }

    beforeServe() {
        if(
            config.db === "" 
            || config.db === "mongoose" 
            || $Db === null
        ) {
        } else {
            $Db.sequelize.sync().then(function () { });
        }
    }
}

module.exports = Db;
    
