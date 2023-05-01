const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const incidentSchema = new Schema(
    {
    userId: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: false,
    },
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
    wasAlcoholInvolved: {
        type: Boolean,
        required: false,
    },
    wereDrugsInvolved: {
        type: Boolean,
        required: false,
    },
    wasSurvivorAsleepTimeOfIncident: {
        type: Boolean,
        required: false,
    },
    verbalThreatsToSurvivor: {
        type: Boolean,
        required: false,
    },
    resistanceOfferedBySurvivor: {
        type: Boolean,
        required: false,
    },
    detailsOfTheAssault: {
        type: String,
        required: false,
    },
    areasOfSexualContact: {
        type: String,
        required: false,
    },
    useOfWeaponsFromAssailant: {
        type: Boolean,
        required: false,
    },
    useOfRestraintFromAssailant: {
        type: Boolean,
        required: false,
    },
},
    { timestamps: true }
);

const Incident = mongoose.model('IncidentReport', incidentSchema);
module.exports = Incident;