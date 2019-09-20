var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

var ingredients = [{
    'id': "2343kak",
    'text': "eggs"
  },
  {
    "id": "dkp345",
    "text": "milk"
  },
  {
    "id": "dkcuu7",
    "text": "bacon"
  },
  {
    "id": "73hdy",
    "text": "frogs legs"
  }
];

app.get('/', function(request, response) {
  response.send(ingredients);
});

app.post('/', function(req, res) {
  var ingredient = req.body;
  if (!ingredient || ingredient.text === "") {
    res.status(500).send({
      error: "Your ingredient must have text"
    });
  } else {
    ingredients.push(ingredient);
    res.status(200).send(ingredient);
  }
});

app.listen(3000, function() {
  console.log("Fisrt api running on port 3000");
});
