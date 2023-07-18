const { ObjectId } = require('mongodb');
const Children = require('../models/Children');
const db = require('./db');
const mongoose = require('mongoose');

const getAllChildren = async(req, res) => {
    const children = await Children.find({})
    
    res.status(200).json(children);
};

const getChildren = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const children = await Children.findById(id)

    if (!children) {
        return res.status(404).json({error: 'No such general'})
    }

    res.status(200).json(children)
};

const createChildren = async (req,res) => {
    let registryType = req.body.registryType;
    let registryReport = {
        registryId: req.body.registryReport.registryId,
        registryType: req.body.registryType,
        fullName: req.body.registryReport.fullName,
        immediateDangerOrMedicalAttention: req.body.registryReport.immediateDangerOrMedicalAttention,
        age: req.body.registryReport.age,
        date: req.body.registryReport.date,
        address: {
            streetAddress: req.body.registryReport.streetAddress,
            city: req.body.registryReport.city,
            state: req.body.registryReport.state,
            zipcode: req.body.registryReport.zipcode,
        },
        detailsOfIncident: req.body.registryReport.detailsOfIncident,
        peopleInvolved: req.body.registryReport.peopleInvolved,
        relationshipToReporter: req.body.registryReport.relationshipToReporter,
        witnesses: req.body.registryReport.witnesses,
        additionalIncidentsOfAbuse: req.body.registryReport.additionalIncidentsOfAbuse,
        concerningThreatsOrActions: req.body.registryReport.concerningThreatsOrActions,
        evidence: req.body.registryReport.evidence,
        otherPeopleAtRisk: req.body.registryReport.otherPeopleAtRisk,
        currentLivingSituationSafe: req.body.registryReport.currentLivingSituationSafe,
        additionalSupportNeeded: req.body.registryReport.additionalSupportNeeded,
    };

    try{
        const childrenReport = await Children.create({ registryReport,registryType })
        res.status(201).send({ status: 'OK', data: childrenReport });
        console.log(childrenReport);
    }
    catch (error) {
        res.status(200).json(error)
    }
};

const updateChildren = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such general'})
    }

    const children = await Children.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(children);

    if (!children) {
        return res.status(400).json({error: 'No such children'})
    }
};

module.exports = { getAllChildren, createChildren, updateChildren, getChildren };