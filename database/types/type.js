// ====================================
//             Requirements
// ====================================
let mongoose=require('mongoose');
const Schema = mongoose.Schema;
const types = require('./types');

// ====================================
//            Schema & Model
// ====================================
const typeSchema = new Schema({
	name: { type: String, required: true },
	weakAgainst: { type: [String] },
	strongAgainst: { type: [String] },
	noEffectFrom: { type: [String] },
	noEffectAgainst: { type: [String] },
});

// model
const type = mongoose.model('Type', typeSchema);

// ====================================
//            First run methods
// ====================================
getTypeCount = () => {
	type.countDocuments({}, (error, count) => {
		if (error) console.log(error);
		addTypes(count);
	});
};

addTypes = async (count) => {
	if (count <= 0) {
		for (let i = 0; i < types.length; i++) {
			let newType = new type(types[i]);
			newType.save();
		}
	}
};

getTypeCount();


// ====================================
//             Export
// ====================================
module.exports = type;