const { Controller } = use('Core/');

class Welcome extends Controller {
    async index(req, res) {
        if (req.session.test !== undefined) {
            req.session.test += 1
        } else {
            req.session.test = 1
        }
        
        // console.log(use('Config/'));
        // let Users = use('Model/Users');
        // Users = await Users.all();

        res.render('index.njk', {
            title: 'Express',
            session: req.session.test
        });
    }
}

module.exports = Welcome;