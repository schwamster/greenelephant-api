'use strict';
var _ = require('lodash');
var jwt = require('jwt-simple');
var authUtils = require('./authUtils');

exports.getMe = function (req, res) {
   var user = {
     displayName: "fritz",
     email: "fritz(at)franz.de",
     picture: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Franz_von_Soxhlet.jpg",
   };
   res.send(user);
};
