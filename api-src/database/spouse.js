const { ObjectId } = require('mongodb');
const Spouse = require('../models/Spouse');
const db = require('./db');
const mongoose = require('mongoose');

const getAllSpouse = async(req, res) => {
    const employee = await Assailant.find({})
    
    res.status(200).json(employee);
};

const getSpouse = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const spouse = await Spouse.findById(id)

    if (!employee) {
        return res.status(404).json({error: 'No such employee'})
    }

    res.status(200).json(employee)
};

const createSpouse = async (req,res) => {
    const { registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, currentLivingSituationSafe, additionalSupportNeeded } = req.body;
    console.log('createSpouse reached');

    try{
        const spouseReport = await Spouse.create({ registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, currentLivingSituationSafe, additionalSupportNeeded })
        res.status(201).send({ status: 'OK', data: spouseReport });
        console.log(spouseReport);
    }
    catch (error) {
        res.status(200).json(error)
    }
};

const updateSpouse = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such employee'})
    }

    const spouse = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(spouse);

    if (!spouse) {
        return res.status(400).json({error: 'No such employee'})
    }
};

module.exports = { getAllSpouse, createSpouse, updateSpouse, getSpouse };