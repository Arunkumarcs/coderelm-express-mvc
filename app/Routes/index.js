const express = require('express');
const router = express.Router();
const config = use('Config/App');

router.get('/', async (req, res, next) => {
	if (req.session.test !== undefined) {
		req.session.test += 1
	} else {
		req.session.test = 1
	}

	
	let Users = use('Model/Users');
	Users = await Users.all();
	

	res.render('index.njk', {
		title: 'Express'
	});
});

// Single Page Application
switch (config.assets) {
	case 'es6':
	case 'vue':
		/* GET home page. */
		router.all('/*',function(req,res){
			res.sendFile(BASE_PATH+'/public/build/index.html');
			res.end();
		});	    
		break;
	case 'react':
		/* GET home page. */
		router.all('/*',function(req,res){
			res.sendFile(BASE_PATH+'/public/react-build/index.html');
			res.end();
		});	  
		break;
	default:
		break;
}

module.exports = router;