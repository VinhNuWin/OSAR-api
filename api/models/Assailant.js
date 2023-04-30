const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assailantSchema = new Schema(
    {
        userId: {
            type: String,
            required: false,
        },
        gender: {
            type: String,
            required: false,
        },
        // raceEthnicity: {
        //     type: String,
        //     required: false,
        // },
        // fullName: {
        //     type: String,
        //     required: false,
        // },
        // streetAddress: {
        //     type: String,
        //     required: false,
        // },
        // work: {
        //     type: String,
        //     required: false,
        // },
        // city: {
        //     type: String,
        //     required: false,
        // },
        // state: {
        //     type: String,
        //     required: false,
        // },
        // zipcode: {
        //     type: String,
        //     required: false,
        // },
        // phone: {
        //     type: String,
        //     required: false,
        // },
        // email: {
        //     type: String,
        //     required: false,
        // },
        // definingCharacteristics: {
        //     type: String,
        //     required: false,
        // },
    },
    { timestamps: true }
);

const Assailant = mongoose.model('AssailantReport', assailantSchema);
module.exports = Assailant;