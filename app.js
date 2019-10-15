const express = require('express');
const helmet = require('helmet');

// CONFIG
const app = express();
const PORT = process.env.PORT || 3000;
app.use(helmet());
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
// OFFLINE DEVELOPMENT
app.use('/boot', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use('/popper', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/fontawesome', express.static(__dirname + '/node_modules/@fortawesome/fontawesome-free'));
app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist'));

// ROUTES
const routes = require('./routes');

// USE ROUTES
app.use('/', routes);

// SERVER
app.listen(PORT, () => console.info(`Server is running on port ${PORT}`));