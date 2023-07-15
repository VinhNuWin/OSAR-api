const { ObjectId } = require('mongodb');
const General = require('../models/General');
const db = require('./db');
const mongoose = require('mongoose');

const getAllGeneral = async(req, res) => {
    const general = await Assailant.find({})
    
    res.status(200).json(general);
};

const getGeneral = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const general = await General.findById(id)

    if (!general) {
        return res.status(404).json({error: 'No such general'})
    }

    res.status(200).json(general)
};

const createGeneral = async (req,res) => {
    const { registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, currentLivingSituationSafe, additionalSupportNeeded } = req.body;
    console.log('createGeneral reached');

    try{
        const generalReport = await General.create({ registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, currentLivingSituationSafe, additionalSupportNeeded  })
        res.status(201).send({ status: 'OK', data: generalReport });
        console.log(generalReport);
    }
    catch (error) {
        res.status(200).json(error)
    }
    console.log('')
};

const updateGeneral = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such general'})
    }

    const general = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(general);

    if (!general) {
        return res.status(400).json({error: 'No such general'})
    }
};

module.exports = { getAllGeneral, createGeneral, updateGeneral, getGeneral };