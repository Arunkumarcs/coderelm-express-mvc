const jwt = use("Library/Jwt");
const { AuthenticationError} = use('apollo-server-express');
const faker = use("faker");
const authKeys = use('Api/keys.json');
const authorizer = use('Api/Includes/auth');

module.exports = {
    Query: {
        /**
         * Generate Access Token
         * @param {*} parent 
         * @param {*} args 
         * @param {*} param2 
         * @param {*} info 
         */
        token(
            parent, 
            args, 
            { 
                ip = "", 
                privateKey = "", 
                publicKey = "" 
            }, 
            info
        ) {
            let uuid = faker.random.uuid();

            // check auth
            if(
                privateKey == "" 
                || authKeys[privateKey] === undefined
            ) {
                throw new AuthenticationError('Invalid Authorization.');
            } else if(
                publicKey == "" 
                || publicKey !== authKeys[privateKey].publicKey
            ) {
                throw new AuthenticationError('Invalid PublicKey.');
            } else if( 
                authKeys[privateKey] !== undefined
                && authKeys[privateKey].publicKey === publicKey
            ) {
                // success
                return jwt.encrypt({
                    uuid,
                    ip,
                    privateKey,
                    publicKey,
                    _check: authKeys[privateKey]
                });    
            }
            
            throw new AuthenticationError('Invalid Authorization.');
        },

        /**
         * Check Access Token
         * @param {*} parent 
         * @param {*} param1 
         * @param {*} param2 
         * @param {*} info 
         */
        async isValid(
            parent, 
            { token }, 
            { 
                ip = ""
            }, 
            info
        ) {
            return await authorizer.isValid(token, ip);
        }
    }
}