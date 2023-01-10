require('./init');

const express = require('express');
const log = require('./services/logger').child({module: 'app'});
const routes = require('./routes');
const app = express();

// Generate the swagger UI.
if (JSON.parse(process.env.SWAGGER_ENABLED || 'false')) {
  log.info('Swagger is enabled.');
  require('./swagger')(app);
}

app.disable('server');
app.disable('x-powered-by');

app.use(routes);

module.exports = app;