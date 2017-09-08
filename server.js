// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.writeHead(200, {'content-type': 'text/plain'});
  var result = {
    ipaddress: request.headers["x-forwarded-for"].match(/^(\d*\.\d*\.\d*\.\d*),/)[1],
    language: request.headers["accept-language"].match(/^(.*),/)[1],
    software: request.headers["user-agent"]
  };
  //response.write(JSON.stringify(request.headers))
  response.end(JSON.stringify(result))
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
