module.exports = function(token, options) {
  var lang = (options && options.lang) ? options.lang : 'eng';
  var url = 'https://api.scanr.xyz/ocr?token=' + token + "&lang=" + lang;

  return {
    ocr: function(stream, cb) {
      var request = require('request');
      var fs = require('fs');

      request.post({url: url, formData: {file: stream}}, process_response);

      function process_response(err, httpResponse, body){
        cb(err, body ? JSON.parse(body) : null);
      }
    }
  }
}