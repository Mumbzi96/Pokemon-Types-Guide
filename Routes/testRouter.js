// ====================================
//             Requirements
// ====================================
const express = require('express');
const testRouter = express.Router();

// ====================================
//                Main
// ====================================

testRouter.get('/', async (req, res, next) => {
	res.render('test', { message: 'Testing' });
});

//========================
//          Exports
//========================
module.exports = testRouter;
