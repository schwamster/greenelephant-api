'use strict';

var express = require('express');
var controller = require('./scanr.controller');
var authUtils = require('../../auth/authUtils');
var multer = require('multer');

var router = express.Router();
router.use(authUtils.ensureAuthenticated); //auth only appied for following paths, not the paths above

var uploading = multer({
  dest: './public/uploads/',
  limits: {fileSize: 1000000, files:1},
})

router.get('/', controller.index);
router.post('/parse',uploading.single('document'), controller.parse);
// router.get('/:id', controller.show);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.patch('/:id', controller.update);
// router.delete('/:id', controller.destroy);
// router.get('/dto/quickList',controller.myMethod);
module.exports = router;
