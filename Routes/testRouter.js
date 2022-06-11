// ====================================
//             Requirements
// ====================================
const express = require('express');
const testRouter = express.Router();
// Database models
const type = require('../database/types/type');

// ====================================
//                Main
// ====================================

testRouter.get('/:type', async (req, res, next) => {
	let typeName = req.params.type.toLowerCase();
	let myType = await type
		.findOne({
			name: typeName,
		}).exec();
	const typesList = await type.find().exec();

	res.render('test', { myType, typesList });
});

//========================
//          Exports
//========================
module.exports = testRouter;
