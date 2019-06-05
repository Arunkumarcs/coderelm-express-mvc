const PublicProvider = use('Core/Provider/Public');
const express = use('express');
const router = express.Router();

const Welcome = use('Controller/Welcome');
const WelcomeObj = new Welcome();

router.get('/', WelcomeObj.index);


// Single Page Application
PublicProvider.dist(router);

module.exports = router;