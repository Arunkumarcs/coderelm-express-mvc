// const appProvider = use('Core/Provider/App');
const express = use('express');
const router = express.Router();

const Welcome = use('Controller/Welcome');
const WelcomeObj = new Welcome();

router.get('/', WelcomeObj.index);

// Single Page Application
// appProvider.dist(router);

module.exports = router;