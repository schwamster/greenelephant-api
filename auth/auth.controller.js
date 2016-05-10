'use strict';
var _ = require('lodash');

var jwt = require('jwt-simple');
var authUtils = require('./authUtils');
exports.signup = function (req, res) {
    console.log("req body " + req.body.email);
        var user = {
            displayName: req.body.displayName,
            email: req.body.email,
            password: req.body.password,
            _id:1
        };
    return res.status(201).json({token: authUtils.createJWT(user)});
};

exports.login = function (req, res) {
    console.log("req body " + req.body.email);
    console.log("req body " + req.body.password);
    var user = {
            displayName: req.body.displayName,
            email: req.body.email,
            password: req.body.password,
            _id:1
    };

    if (req.body.password != 'qwert')
    {
      return res.status(401).send({message: 'Wrong email and/or password'});
    }
    res.send({token: authUtils.createJWT(user)});
};
