// const http = require('http');
require('dotenv').config();
const debug = require('debug')('app:server');
const express = require('express');

const cors = require('cors');
const router = require('./app/routers');

const port = process.env.PORT ?? 4000;

const app = express();

// Retrait de la restriction CORS
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}));

// Activation du middlewar pour parser le playload urlencoded
app.use(express.urlencoded({ extended: true }));
// Activation du middlewar pour parser le payload JSON
app.use(express.json());

app.use(router);

app.listen(port, () => {
    debug(`Listening on ${port}`);
});
