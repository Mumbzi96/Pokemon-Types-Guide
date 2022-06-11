const handlebars = require('express-handlebars');
const moment = require('moment');

hbs = handlebars.create({
	defaultLayout: 'main',
	runtimeOptions: {
		allowProtoPropertiesByDefault: true,
		allowProtoMethodsByDefault: true,
	},
	helpers: {
		toUpperCase: function (title) {
			if (!title) return '';
			// capitalizing the first letter in its own string
			let capitalized = title[0].toUpperCase();
			// slicing the title from after it's first letter
			let small = title.slice(1, title.length);
			// Returning both
			return capitalized + small;
		},
		otherMethod: function () {
			
		}
	},
});

module.exports = hbs;
