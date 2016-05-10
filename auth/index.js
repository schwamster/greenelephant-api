'use strict';

var express = require('express');
var authUtils = require('./authUtils');
var authController = require('./auth.controller.js');
var meController = require('./me.controller.js');
var router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);


//TODO implement ensureAuthenticated
/*router.get('/me',authUtils.ensureAuthenticated, meController.getMe );
router.put('/me',authUtils.ensureAuthenticated, meController.updateMe );
*/
router.use(authUtils.ensureAuthenticated); //auth only appied for following paths, not the paths above
router.get('/me', meController.getMe );
module.exports = router;

//"https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=631036554609-v5hm2amv4pvico3asfi97f54sc51ji4o.apps.googleusercontent.com&redirect_uri=https://satellizer.herokuapp.com&scope=openid profile email&display=popup"
