const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const elderlySchema = new Schema(
    {
        // registryReport: {
        //     type: Object,
        //     required: true,
        // },
        registryId: {
            type: String,
            required: false,
        },
        registryType: {
            type: String,
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
        address: {
            type: Object,
            required: false,
        },
        detailsOfIncident: {
            type: String,
            required: false,
        },
        peopleInvolved: {
            type: String,
            required: false,
        },
        relationshipToReporter: {
            type: String,
            required: false,
        },
        concerningThreatsOrActions: {
            type: String,
            required: false,
        },
        additionalIncidentsOfAbuse: {
            type: String,
            required: false,
        },
        witnesses: {
            type: String,
            required: false,
        },
        evidence: {
            type: String,
            required: false,
        },
        otherPeopleAtRisk: {
            type: String,
            required: true,
        },
        currentLivingSituationSafe: {
            type: String,
            required: true,
        },
        additionalSupportNeeded: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Elderly = mongoose.model('ElderlyReport', elderlySchema);
module.exports = Elderly;