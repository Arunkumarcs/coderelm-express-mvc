const { Provider } = use('Core/');
const config = use('Config/Db');
const env = process.env.NODE_ENV || 'development';

class Db extends Provider {
    boot() {
        switch (config.db) {
            case "sequelize":     
                this.sequelize();
                break;
            case "mongoose":
                this.mongoose();
                break;
            default:     
                global.$Db = null;
                break;
        }
    }

    sequelize() {
        // sequelize: mysql or postgress
        global.$Db = use("Db/models");  
    }

    mongoose() {
        // mongoose
        const mongoose = use('mongoose');
        mongoose.connect(
            config.mongoose[env].connection, 
            config.mongoose[env].options
        );
        
        // check connection
        let connection  = mongoose.connection;
        connection.on('error', console.error.bind(console, '-> mongodb connection error:'));
        connection.once('open', function() {
            console.log("-> mongodb connection success");
        });

        global.$Db = mongoose;
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
    
