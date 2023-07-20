const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assaultSchema = new Schema(
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
            required: true,
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
        alcoholInvolved: {
            type: String,
            required: false,
        },
        drugsInvolved: {
            type: String,
            required: false,
        },
        wasSurvivorAsleep: {
            type: String,
            required: false,
        },
        verbalThreats: {
            type: String,
            required: false,
        },
        resistanceOffered: {
            type: String,
            required: false,
        },
        detailsOfIncident: {
            type: String,
            required: false,
        },
        evidence: {
            type: String,
            required: false,
        },
        useOfWeapons: {
            type: String,
            required: false,
        },
        useOfRestraints: {
            type: String,
            required: false,
        },
        assailantGender: {
            type: String,
            required: false,
        },
        raceEthnicity: {
            type: String,
            required: false,
        },
        assailantsFullName: {
            type: String,
            required: false,
        },
        survivorsFullName: {
            type: String,
            required: false,
        },
        survivorGender: {
            type: String,
            required: false,
        },
        additionalSupportNeeded: {
            type: String,
            required: false,
        },
    },
    { timestamps: true }
);

const Assault = mongoose.model('AssaultReport', assaultSchema);
module.exports = Assault;