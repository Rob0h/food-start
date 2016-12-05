var express = require('express');
var app = express();
var morgan = require('morgan');


require('./requesthandler.js')(app, express);
app.use(morgan('dev'));


app.listen(1337, function() {
  console.log('Server is running on port 1337');
});

