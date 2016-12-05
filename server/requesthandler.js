var path = require('path');
var http = require('http');
var cors = require('cors');

module.exports = function(app, express) {
  app.use(cors());

  app.use('/app', express.static(path.join(__dirname, '..', '/app')));
  app.use('/lib', express.static(path.join(__dirname, '..', '/lib')));

  app.get('/', function(req, res) {
    res.sendFile('index.html', {root: __dirname + '/../app'});
  });
}