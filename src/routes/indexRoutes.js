const express = require('express');

const indexController = require('../controllers/indexController');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Node API default');
});

router.get('/test', indexController.test);

module.exports = router;