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

app.get('/ingredients', function(request, response) {
  response.send(ingredients);
});

app.post('/ingredients', function(req, res) {
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

app.put('/ingredients/:ingredientId', function(req, res) {
  var ingredientId = req.params.ingredientId;
  var text = req.body.text;
  var found = false;

  if (!text || text === "") {
    res.status(500).send({
      error: "You must a provide ingredient"
    })
  } else {
    for (var x = 0; x < ingredients.length; x++) {
      var ing = ingredients[x];

      if (ing.id === req.params.ingredientId) {
        ingredients[x].text = text;
        found = true;
        break;
      }
    }

    if (!found) {
      res.status(500).send({
        error: "Ingredient does not exist"
      });
      return;
    }

    res.send(ingredients);
  }
});

app.delete('/ingredients/:ingredientId', function(req, res) {
  var id = req.params.ingredientId;
  var success = false;

  for (var i = 0; i < ingredients.length; i++) {
    if (id === ingredients[i].id) {
      ingredients.splice(i, 1);
      success = true;
    }
  }

  if (success) {
    res.send(ingredients);
  } else {
    res.status(500).send({
      error: "Ingredient id not found"
    });
  }
})

app.listen(3000, function() {
  console.log("Fisrt api running on port 3000");
});
