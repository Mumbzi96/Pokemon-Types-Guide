// ====================================
//             Requirements
// ====================================
const express = require('express');
const typesRouter = express.Router();
// Database models
const type = require('../database/types/type');

// ====================================
//                Main
// ====================================

typesRouter.get('/:type', async (req, res, next) => {
	// Getting types
	const typesList = await type.find().exec();

	// Switching type to lower case
	let typeName = req.params.type.toLowerCase();

	// Getting the type itself
	let myType = await type
		.findOne({
			name: typeName,
		})
		.exec();
		
	// Rendering
	res.render('typesDetails', { myType, typesList });
});

//========================
//          Exports
//========================
module.exports = typesRouter;
