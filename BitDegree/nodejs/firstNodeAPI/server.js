var express = require('express');
var app = express();

app.get('/', function(request, response) {
  response.send('My First API!');
});

app.get('/funions', function(req, res) {
  res.send("Give me them funions");
});

app.listen(3000, function() {
  console.log("Fisrt api running on port 3000");
});
