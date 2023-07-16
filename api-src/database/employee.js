const { ObjectId } = require('mongodb');
const Employee = require('../models/Employee');
const db = require('./db');
const mongoose = require('mongoose');

const getAllEmployees = async(req, res) => {
    const employee = await Employee.find({})
    
    res.status(200).json(employee);
};

const getEmployee = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const employee = await Employee.findById(id)

    if (!employee) {
        return res.status(404).json({error: 'No such employee'})
    }

    res.status(200).json(employee)
};

const createEmployee = async (req,res) => {
    let registryType = req.body.registryType;
    let registryReport = {
        registryId: req.body.registryReport.registryId,
        immediateDangerOrMedicalAttention: req.body.registryReport.immediateDangerOrMedicalAttention,
        fullName: req.body.registryReport.fullName,
        date: req.body.registryReport.date,
        address: {
            streetAddress: req.body.registryReport.streetAddress,
            city: req.body.registryReport.city,
            state: req.body.registryReport.state,
            zipcode: req.body.registryReport.zipcode,
        },
        title: req.body.registryReport.title,
        detailsOfIncident: req.body.registryReport.detailsOfIncident,
        peopleInvolved: req.body.registryReport.peopleInvolved,
        relationshipToReporter: req.body.registryReport.relationshipToReporter,
        witnesses: req.body.registryReport.witnesses,
        additionalIncidentsOfAbuse: req.body.registryReport.additionalIncidentsOfAbuse,
        concerningThreatsOrActions: req.body.registryReport.concerningThreatsOrActions,
        evidence: req.body.registryReport.evidence,
        otherPeopleAtRisk: req.body.registryReport.otherPeopleAtRisk,
        incidentOutcome: req.body.registryReport.incidentOutcome,
        abilitiesAffected: req.body.registryReport.abilitiesAffected,
        currentLivingSituationSafe: req.body.registryReport.currentLivingSituationSafe,
        seekedMedicalAttention: req.body.registryReport.seekedMedicalAttention,
        reportedToHigherPersonel: req.body.registryReport.reportedToHigherPersonel,
        personalAffect: req.body.registryReport.personalAffect,
        actionsTakenSinceIncident: req.body.registryReport.actionsTakenSinceIncident,
        additionalComments: req.body.registryReport.additionalComments,
        additionalSupportNeeded: req.body.registryReport.additionalSupportNeeded,
        alcoholInvolved: req.body.registryReport.alcoholInvolved,
        drugsInvolved: req.body.registryReport.drugsInvolved,
        wasSurvivorAsleep: req.body.registryReport.wasSurvivorAsleep,
        verbalThreats: req.body.registryReport.verbalThreats,
        resistanceOffered: req.body.registryReport.resistanceOffered,
        useOfWeapons: req.body.registryReport.useOfWeapons,
        useOfRestraints: req.body.registryReport.useOfRestraints,
        assailantGender: req.body.registryReport.assailantGender,
        raceEthnicity: req.body.registryReport.raceEthnicity,
        assailantsFullName: req.body.registryReport.assailantsFullName,
        survivorsFullName: req.body.registryReport.survivorsFullName,
        survivorGender: req.body.registryReport.survivorGender,
    };

    try{
        const employeeReport = await Employee.create({ registryReport, registryType })
        res.status(201).send({ status: 'OK', data: employeeReport });
        console.log(employeeReport);
    }
    catch (error) {
        res.status(200).json(error)
    }
};

const updateEmployee = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such employee'})
    }

    const employee = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(employee);

    if (!employee) {
        return res.status(400).json({error: 'No such employee'})
    }
};

module.exports = { getAllEmployees, createEmployee, updateEmployee, getEmployee };