var express = require('express');

module.exports = function() {
  var app = express();
  app.set('views', './views');
  app.set('view engine', 'ejs'); 

  require('../routes/index.server.routes.js')(app);
  return app;
}
