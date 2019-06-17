const express = use('express');
const router = express.Router();

const Ajax = use('Controller/Ajax');
const AjaxObj = new Ajax();

router.all('/', async(req, res) => {
    await AjaxObj.index(req, res);
});

module.exports = router;