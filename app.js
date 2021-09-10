'use strict';

const express = require('express');

const app = express();

app.get('/getting-started', (req, res) => {
	res.send('Hello World!');
});

app.get('/see-you-later', (req, res) => {
	res.send('Good Bye!');
});

app.get('/whats-new', (req, res) => {
	res.send('Whats up!');
});

app.all('*', (req, res, next) => {
	// TODO: send 4xx page
	res.send('I do not understand you');
});

app.use((err, req, res, next) => {
	console.error(err);
	// TODO: send 5xx page
	res.send('I am sleeping');
});

app.disable('x-powered-by');
app.disable('etag');

module.exports = app;
