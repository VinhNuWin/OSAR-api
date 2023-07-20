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
        fullName: req.body.fullName,
        immediateDangerOrMedicalAttention: req.body.immediateDangerOrMedicalAttention,
        fullName: req.body.fullName,
        date: req.body.date,
        address: {
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
        },
        detailsOfIncident: req.body.detailsOfIncident,
        peopleInvolved: req.body.peopleInvolved,
        relationshipToReporter: req.body.relationshipToReporter,
        witnesses: req.body.witnesses,
        additionalIncidentsOfAbuse: req.body.additionalIncidentsOfAbuse,
        concerningThreatsOrActions: req.body.concerningThreatsOrActions,
        evidence: req.body.evidence,
        otherPeopleAtRisk: req.body.otherPeopleAtRisk,
        currentLivingSituationSafe: req.body.currentLivingSituationSafe,
        additionalComments: req.body.additionalComments,
        additionalSupportNeeded: req.body.additionalSupportNeeded,
        alcoholInvolved: req.body.alcoholInvolved,
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