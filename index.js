// ====================================
//             Requirements
// ====================================
// NPM Modules
const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars'); // Normal npm package
const dotenv = require('dotenv');
const moment = require('moment');
const mongoose = require('mongoose');
// Project Modules
const hbs = require('./views/helpers/handlebarsHelper');
// Database models
const type = require('./database/types/type');
// Routers
const testRouter = require('./routes/testRouter.js');
// Init
const app = express();

// ====================================
//             Configuration
// ====================================

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// config.env
dotenv.config({
	path: './configuration/config.env',
});

//MongoDB
mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		dbName: process.env.DATABASE_NAME,
	})
	.then(console.log('Connected to mongo'))
	.catch((error) => console.log(error));

// ====================================
//             Middleware
// ====================================

// Body parser
app.use(express.json()); //To use body parser for JSON
app.use(
	express.urlencoded({
		extended: true,
	})
);

// Static
app.use(express.static(path.join(__dirname, '/public')));

// Logging
app.use((req, res, next) => {
	console.log(`Used a ${req.method} method on ${req.url} at ${moment()} `);
	next();
});

// ====================================
//             Routing
// ====================================
app.use('/test', testRouter);

app.get('/', (req, res) => {
	let obj = 'Hello World';
	res.render('home', { obj });
});

// ====================================
//          Error Handling
// ====================================
app.use(async (err, req, res, next) => {
	console.log('An error happened: ' + err);
	res.render('error', { err });
});

// ====================================
//             Listening on ports
// ====================================
app.listen(process.env.PORT, () => {
	console.log(`Listening on http://localhost:${process.env.PORT}`);
});
