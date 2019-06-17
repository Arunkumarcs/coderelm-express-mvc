const authKeys = use('Api/keys.json');
const jwt = use("Library/Jwt");
const { AuthenticationError } = use('apollo-server-express');

module.exports = {

    /**
     * 
     * @param {*} token 
     * @param {*} ip 
     * @param {*} response 
     */
    async isValid(
        token,
        ip,
        response = false
    ) {
        let jwtDec = jwt.decrypt(token);

        // check validity
        if( 
            authKeys[jwtDec.privateKey] !== undefined
            && authKeys[jwtDec.privateKey].type === jwtDec._check.type
            && authKeys[jwtDec.privateKey].publicKey === jwtDec._check.publicKey
            && jwtDec.ip === ip
        ) {
            if(response) {
                return jwtDec;
            }
            return true;
        }

        throw new AuthenticationError('Invalid Access Token.');
    }
}