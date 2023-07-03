const { ObjectId } = require('mongodb');
const Elderly = require('../models/Elderly');
const db = require('./db');
const mongoose = require('mongoose');

const getAllElderly = async(req, res) => {
    const employee = await Assailant.find({})
    
    res.status(200).json(employee);
};

const getElderly = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const elderly = await Elderly.findById(id)

    if (!employee) {
        return res.status(404).json({error: 'No such employee'})
    }

    res.status(200).json(employee)
};

const createElderly = async (req,res) => {
    const { registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, additionalSupportNeeded } = req.body;
    console.log('createElderly reached');

    try{
        const elderlyReport = await Elderly.create({ registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, additionalSupportNeeded })
        res.status(201).send({ status: 'OK', data: elderlyReport });
        console.log(res.data);
    }
    catch (error) {
        res.status(200).json(error)
    }
};

const updateElderly = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such employee'})
    }

    const elderly = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(elderly);

    if (!elderly) {
        return res.status(400).json({error: 'No such employee'})
    }
};

module.exports = { getAllElderly, createElderly, updateElderly, getElderly };