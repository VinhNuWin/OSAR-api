const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const generalSchema = new Schema(
    {
        registryId: {
            type: String,
            required: false,
        },
        registryType: {
            type: String,
            required: false,
        },
        registryReport: {
            type: Object,
            required: false,
        },
        immediateDangerOrMedicalAttention: {
            type: String,
            required: false,
        },
        fullName: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            required: false,
        },
        // address: {
        //     type: Object,
        //     required: false,
        // },
        // detailsOfIncident: {
        //     type: String,
        //     required: false,
        // },
        // peopleInvolved: {
        //     type: String,
        //     required: false,
        // },
        // relationshipToReporter: {
        //     type: String,
        //     required: false,
        // },
        // concerningThreatsOrActions: {
        //     type: String,
        //     required: false,
        // },
        // additionalIncidentsOfAbuse: {
        //     type: String,
        //     required: false,
        // },
        // witnesses: {
        //     type: String,
        //     required: false,
        // },
        // evidence: {
        //     type: String,
        //     required: false,
        // },
        // otherPeopleAtRisk: {
        //     type: String,
        //     required: false,
        // },
        // currentLivingSituationSafe: {
        //     type: String,
        //     required: false,
        // },
        // additionalSupportNeeded: {
        //     type: String,
        //     required: false,
        // },
    },
    { timestamps: false }
);

const General = mongoose.model('GeneralReport', generalSchema);
module.exports = General;