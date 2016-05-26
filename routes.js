
'use strict';

module.exports = function (app) {

    app.use('/api/scanr', require('./api/scanr'));
    app.use('/auth',require('./auth'));
};
