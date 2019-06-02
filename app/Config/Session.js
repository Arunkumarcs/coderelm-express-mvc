module.exports = {
    // https://expressjs.com/en/resources/middleware/session.html
    options: {
        secret: "ersfbhesdzdbgnfgdgf", 
        resave: false, 
        saveUninitialized: true 
    },
    // https://www.npmjs.com/package/session-file-store
    sessionStorage: {
        secret: "5475687bcv"
    }
};