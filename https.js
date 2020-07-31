/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-07-03 12:42:09
 * @LastEditors: ankeji
 * @LastEditTime: 2020-07-03 12:42:09
 */ 
var https = require("https");

function download(url, callback) {
  https.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}

exports.download = download;