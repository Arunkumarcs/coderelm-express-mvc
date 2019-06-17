const { Controller } = use('Core/');
const request = use("request");
const config = use("Config/App");

class Ajax extends Controller {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     */
    async index(req, res) {
        this.req = req;
        this.res = res;

        if(req.session.apiToken == undefined) {
            this.makeToken(req.session); 
        } else {
            this.verifyToken(req.session);
        }
    }

    verifyToken(session) {
        let self = this;
        
        const options = { 
            method: 'POST',
            url: `${config.url}/api/auth`,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: { 
                query: `{
                    isValid (
                        token: "${session.apiToken}"
                    )
                }`
            } 
        };
        request.post(options,function (error, response, body) {
            if (error) 
                throw new Error(error);
            
            body = JSON.parse(body);

            if(body.errors) {
                self.makeToken(session);
            } else {
                self.callApi(session);
            }
        });
    }

    makeToken(session) {
        let self = this;

        const options = { 
            method: 'POST',
            url: `${config.url}/api/auth`,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': 'ajax_pr_xbgsdsjkkcxuvoidcasnscrfgrsdfhyyjtyu',
                'public_key': 'ajax_pub_456768oyujhhgfgferehytukyjfhdcfcs'
            },
            form: { 
                query: `{
                    token
                }`
            } 
        };
        request.post(options,function (error, response, body) {
            if (error) 
                throw new Error(error);
            
            body = JSON.parse(body);
            
            if(body.errors) {
                self.res.json(body);   
            } else {
                session.apiToken = body.data.token;
                self.callApi(session);
            }
        });
    }

    /**
     * 
     * @param {*} query 
     * @param {*} callback 
     */
    callApi(session) {
        let self = this;
        
        const options = { 
            method: 'POST',
            url: `${config.url}/api`,
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': session.apiToken
            },
            form: { 
                query: self.req.body.query
            } 
        };

        request.post(options,function (error, response, body) {
            if (error) 
                throw new Error(error);
    
            self.res.json(JSON.parse(body));
        });
    }
}

module.exports = Ajax;