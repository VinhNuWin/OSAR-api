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
    const { registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, currentLivingSituationSafe, additionalSupportNeeded } = req.body;
    console.log('createChildren reached');

    try{
        const childrenReport = await Children.create({ registryReport, registryId, registryType, fullName, date, address, detailsOfIncident, peopleInvolved, relationshipToReporter, witnesses, additionalIncidentsOfAbuse, evidence, otherPeopleAtRisk, currentLivingSituationSafe, additionalSupportNeeded })
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