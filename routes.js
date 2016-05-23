
'use strict';

module.exports = function (app) {

    app.use('/api/customer', require('./api/customer'));
    app.use('/api/scanr', require('./api/scanr'));
    app.use('/auth',require('./auth'));
};
