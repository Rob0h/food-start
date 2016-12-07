var path = require('path');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');
var recipesController = require('./recipes/recipesController.js')
var ingredientsController = require('./ingredients/ingredientsController.js')
var usersController = require('./users/usersController.js');


module.exports = function(app, express) {
  // test if this is still needed
  app.use(cors());

  app.use(bodyParser.json());

  // static file serving
  app.use('/app', express.static(path.join(__dirname, '..', '/app')));
  app.use('/lib', express.static(path.join(__dirname, '..', '/lib')));
  app.use('/node_modules', express.static(path.join(__dirname, '..', '/node_modules')));
  app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname + '/../app'});
  });

  // recipe logic
  app.post('/addRecipe', function(req, res) {
    console.log('adding recipe');
    recipesController.addRecipe(req.body);
  });
  app.get('/getRecipes', function(req, res) {
    console.log('retrieving recipes');
    recipesController.getRecipes(req, res);
  });
  app.post('/removeRecipe', function(req, res) {
    console.log('removing recipe');
    recipesController.removeRecipe(req.body)
    .then(function(result){
      res.send(result);
    });
  });

  // ingredient logic
  app.post('/addToFridge', function(req, res) {
    console.log('adding to fridge');
    ingredientsController.addIngredient(req.body)
    .then(function(result){
      res.send(result);
    });
  });
  app.get('/getFridge', function(req, res) {
    console.log('stocking fridge');
    ingredientsController.getFridge(res, res);
  });
  app.post('/removeFromFridge', function(req, res) {
    console.log('removing ingredient');
    ingredientsController.removeFromFridge(req.body)
    .then(function(result){
      res.send(result);
    })
  });

  // user logic
  app.post('/login', function(req, res) {
    usersController.addUser(req.body)
    .then(function(result) {
      console.log(result);
      res.send(result);
    })
  })
}