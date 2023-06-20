const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrySchema = new Schema(
    {
        email: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: false,
        },
        date: {
            type: String,
            required: false,
        },
        address: {
            streetAddress: {
                type: String,
                required: false,
            },
            city: {
                type: String,
                required: false,
            },
            state: {
                type: String,
                required: false,
            },
            postal: {
                type: Number,
                required: false,
            },
        },
        peopleInvolved: {
            type: String,
            required: false,
        },
        detailsOfIncident: {
            type: String,
            required: false,
        },
        witnesses: {
            type: String,
            required: false,
        },
        incidentOutcome: {
            type: String,
            required: false,
        },
        abilitiesAffected: {
            type: String,
            required: false,
        },
        seekedMedicalAttention: {
            type: Boolean,
            required: false,
        },
        reportedToHigherPersonel: {
            type: Boolean,
            required: false,
        },
        actionsTakenSinceIncident: {
            type: String,
            required: false,
        },
        personalAffectFromIncident: {
            type: Boolean,
            required: false,
        },
        additionalComments: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);

const Registry = mongoose.model('Registries', registrySchema);
module.exports = Registry;