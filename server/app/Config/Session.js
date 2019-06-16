module.exports = {
    enabled: true,

    // https://expressjs.com/en/resources/middleware/session.html
    options: {
        secret: "ersfbhesdzdbgnfgdgf", 
        resave: false, 
        saveUninitialized: true,
        cookie: { 
            secure: true,
            maxAge: 86400
        }
    },
    
    // https://www.npmjs.com/package/session-file-store
    enableSessionStorage: false,
    sessionStorage: {
        secret: "5475687asdfabcv"
    }
};