var config = require('./config.global');

config.env = "production";
config.port = process.env.PORT || 10000;
config.TOKEN_SECRET = process.env.TOKEN_SECRET || 'A hard to guess string';
module.exports = config;
