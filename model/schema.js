const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
    email: {type: String, required: true, max: 100},
    phone: {type: String, required: true, max: 20},
    qualification: {type: String, required: true, max: 50},
    location: {type: String, required: true, max: 50},
    expertise: {type: Number, required: true},
    expertise_biological: {type: Number, required: true},
    expertise_pcr: {type: Number, required: true},
    availability: {type: Number, required: true},
*/

let RecruitmentSchema = new Schema({
    symptoms: {type: String, required: true, max: 200},
    diagnosed: {type: Boolean, required: true}
});


// Export the model
module.exports = mongoose.model('Recruitment', RecruitmentSchema);
