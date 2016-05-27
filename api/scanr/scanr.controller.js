'use strict';

var _ = require('lodash');
var fs = require("fs");

// Get list of items
exports.index = function(req, res) {
  var message = "you can send jpg,png,pdfs to analyse the text";
  return res.status(200).json(message);
};

exports.parse = function(req, res) {
  console.log(req.file);
  var token = process.env.SCANR_TOKEN;
  var scanr = require("./scanrapi")(token, {lang: 'eng'});
 
  scanr.ocr(fs.createReadStream(req.file.path), function (err, text){
    return res.status(200).json(text);
  });
  
  
  // fs.readFile(req.file.path, function (err, data) {
     
//   var newPath = __dirname + "/uploads/" + req.files.document.name;
//   fs.writeFile(newPath, data, function (err) {
//     if(err)
//     {
//       console.log(newPath);
//       console.log(err);
//     }
//     res.redirect("back");
//   });
// });
//return res.status(200).json("file uploaded");
};

function handleError(res, err) {
  return res.send(400, err);
}
