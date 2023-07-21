const { ObjectId } = require('mongodb');
const Spouse = require('../models/Spouse');
const db = require('./db');
const mongoose = require('mongoose');

const getAllSpouse = async(req, res) => {
    const spouse = await Assailant.find({})
    
    res.status(200).json(spouse);
};

const getSpouse = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const spouse = await Spouse.findById(id)

    if (!spouse) {
        return res.status(404).json({error: 'No such spouse'})
    }

    res.status(200).json(spouse)
};

const createSpouse = async (req,res) => {
    let registryType = req.body.registryType;
    let registryReport = {
        registryId: req.body.registryId,
        registryType: req.body.registryType,
        fullName: req.body.registryReport.fullName,
        immediateDangerOrMedicalAttention: req.body.registryReport.immediateDangerOrMedicalAttention,
        fullName: req.body.registryReport.fullName,
        date: req.body.registryReport.date,
        address: req.body.registryReport.address,
        detailsOfIncident: req.body.registryReport.detailsOfIncident,
        peopleInvolved: req.body.registryReport.peopleInvolved,
        relationshipToReporter: req.body.registryReport.relationshipToReporter,
        witnesses: req.body.registryReport.witnesses,
        additionalIncidentsOfAbuse: req.body.registryReport.additionalIncidentsOfAbuse,
        concerningThreatsOrActions: req.body.registryReport.concerningThreatsOrActions,
        evidence: req.body.registryReport.evidence,
        otherPeopleAtRisk: req.body.registryReport.otherPeopleAtRisk,
        currentLivingSituationSafe: req.body.registryReport.currentLivingSituationSafe,
        additionalComments: req.body.registryReport.additionalComments,
        additionalSupportNeeded: req.body.registryReport.additionalSupportNeeded,
        alcoholInvolved: req.body.registryReport.alcoholInvolved,
    }

    console.log(req.body);
    try{
        const spouseReport = await Spouse.create({ registryReport, registryType })
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
        return res.status(404).json({error: 'no such spouse'})
    }

    const spouse = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(spouse);

    if (!spouse) {
        return res.status(400).json({error: 'No such spouse'})
    }
};

module.exports = { getAllSpouse, createSpouse, updateSpouse, getSpouse };