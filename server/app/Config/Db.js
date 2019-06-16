module.exports = {
    // mongoose, sequelize
    db: "", 

    // MongoDb
    mongoose: {
        development: {
            connection: "mongodb://localhost/my_database",
            options:  {
                useNewUrlParser: true
            }
        },
        test: {
            connection: "mongodb://localhost/my_database",
            options:  {
                useNewUrlParser: true
            }
        },
        production: {
            connection: "mongodb://localhost/my_database",
            options:  {
                useNewUrlParser: true
            }
        } 
    },

    // mysql, postgress or sql
    sequelize: {
        "development": {
            "username": "root",
            "password": "",
            "database": "express_mvcd",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            },
            "logging": false
        },
        "test": {
            "username": "root",
            "password": "",
            "database": "express_mvc",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            },
            "logging": true
        },
        "production": {
            "username": "root",
            "password": "",
            "database": "express_mvc",
            "host": "127.0.0.1",
            "dialect": "mysql",
            "pool": {
                "max": 5,
                "min": 0,
                "idle": 10000
            },
            "logging": false
        }
    }
};