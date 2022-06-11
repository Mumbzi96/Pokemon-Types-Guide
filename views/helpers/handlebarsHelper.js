const handlebars = require('express-handlebars');
const moment = require('moment');

hbs = handlebars.create({
	defaultLayout: 'main',
	runtimeOptions: {
		allowProtoPropertiesByDefault: true,
		allowProtoMethodsByDefault: true,
	},
	helpers: {
	}
});

module.exports = hbs;