const express = require('express');
const controllers=require('./controllers');

const router = express.Router();

router.get('/user/:user', controllers.getUser);
router.get('/repository/:query'.controllers.getRepos);

module.exports = router;