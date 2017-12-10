var express = require('express');
var app = express();

//Serving the static files
app.use('/', express.static(__dirname + '/public'));

//Starting the server
app.listen(3000, function () {
  console.log('your website is listening on port 3000!');
});