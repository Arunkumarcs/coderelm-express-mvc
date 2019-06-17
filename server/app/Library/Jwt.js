const config = use('Config/Jwt');
const jwt = use("jsonwebtoken");

module.exports = {
    /**
     * Encrypt obj
     * @param {*} obj 
     */
    encrypt(obj) {
        return jwt.sign(
            obj, 
            config.secret,
            {
                ...config.options
            }
        )
    },

    /**
     * Decrypt token
     * @param {*} token 
     */
    decrypt(token) {
        return jwt.verify(
            token, 
            config.secret
        );
    }
};