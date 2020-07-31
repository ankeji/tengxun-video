/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2020-07-03 12:43:16
 * @LastEditors: ankeji
 * @LastEditTime: 2020-07-03 12:43:16
 */ 

const http = require("http");
const querystring = require('querystring');
 
// Utility function that downloads a URL and invokes
// callback with the data.
function download(url, callback) {
  http.get(url, function(res) {
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

function downPost(url,data,callback) {
  var req = http.request({
    hostname: '127.0.0.1',
    port: 3000,
    path: '/pay/pay_callback',
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  },(res)=> {
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  });
  req.on('error', function (e) {
    callback(null);
  });
  // write data to request body
  req.write(querystring.stringify(content));
  req.end();
}





exports.download = download;