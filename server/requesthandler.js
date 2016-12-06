var path = require('path');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');
var recipesController = require('./recipes/recipesController.js')

module.exports = function(app, express) {
  // test if this is still needed
  app.use(cors());

  app.use(bodyParser.json());

  app.use('/app', express.static(path.join(__dirname, '..', '/app')));
  app.use('/lib', express.static(path.join(__dirname, '..', '/lib')));

  app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname + '/../app'});
  });
  app.post('/addRecipe', function(req, res) {
    console.log(req.body);
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
  })
}