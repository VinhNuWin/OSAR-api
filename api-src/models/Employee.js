const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema(
    {
    registryId: {
        type: String,
        required: false,
    },
    fullName: {
        type: String,
        required: false,
    },
    registryType: {
        type: String,
        required: true,
    },
    registryReport: {
        type: Object,
        required: true,
    },
    date: {
        type: String,
        required: false,
    },
    address: {
        type: Object,
        required: false,
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
    // peopleInvolved: {
    //     type: String,
    //     required: false,
    // },
    // detailsOfIncident: {
    //     type: String,
    //     required: false,
    // },
    // witnesses: {
    //     type: String,
    //     required: false,
    // },
    // incidentOutcome: {
    //     type: String,
    //     required: false,
    // },
    // abilitiesAffected: {
    //     type: String,
    //     required: false,
    // },
    // seekedMedicalAttention: {
    //     type: String,
    //     required: false,
    // },
    // evidence: {
    //     type: String,
    //     required: false,
    // },
    // reportedToHigherPersonel: {
    //     type: String,
    //     required: false,
    // },
    // actionsTakenSinceIncident: {
    //     type: String,
    //     required: false,
    // },
    // personalAffect: {
    //     type: String,
    //     required: false,
    // },
    // additionalComments: {
    //     type: String,
    //     required: false
    // }
},
    { timestamps: true }
);

const Employee = mongoose.model('EmployeeReport', employeeSchema);
module.exports = Employee;