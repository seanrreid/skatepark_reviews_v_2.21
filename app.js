'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3333;

const express = require('express'),
    app = express();

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index'),
    parksController = require('./routes/parks'),
    reviewsController = require('./routes/reviews'),
    usersController = require('./routes/users');

app.use('/', rootController);
app.use('/parks', parksController);
app.use('/reviews', reviewsController);
app.use('/user', usersController);
