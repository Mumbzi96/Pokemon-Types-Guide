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

testRouter.get('/', async (req, res, next) => {
	res.render('test',{message:'Test page'});
});

//========================
//          Exports
//========================
module.exports = testRouter;
