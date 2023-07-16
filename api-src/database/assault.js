const { ObjectId } = require('mongodb');
const Assault = require('../models/Assault');
const db = require('./db');
const mongoose = require('mongoose');

const getAllAssault = async(req, res) => {
    const employee = await Assailant.find({})
    
    res.status(200).json(employee);
};

const getAssault = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such user'})
    }

    const assault = await Assault.findById(id)

    if (!assault) {
        return res.status(404).json({error: 'No such employee'})
    }

    res.status(200).json(assault)
};

const createAssault = async (req,res) => {
    let registryType = req.body.registryType;
    let registryReport = {
        registryId: req.body.registryId,
        registryType: req.body.registryType,
        immediateDangerOrMedicalAttention: req.body.registryReport.immediateDangerOrMedicalAttention,
        date: req.body.registryReport.date,
        address:  req.body.registryReport.address,
        detailsOfIncident: req.body.registryReport.detailsOfIncident,
        peopleInvolved: req.body.registryReport.peopleInvolved,
        witnesses: req.body.registryReport.witnesses,
        evidence: req.body.registryReport.evidence,
        additionalComments: req.body.registryReport.additionalComments
    }

    try{
        const assaultReport = await Assault.create({ registryReport, registryType })
        res.status(201).send({ status: 'OK', data: assaultReport });
        console.log(assaultReport);
    }
    catch (error) {
        res.status(200).json(error)
    }
};

const updateAssault = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'no such employee'})
    }

    const assault = await Incident.findOneAndUpdate({_id: id}, {
        ...req.body
    })
    res.status(200).json(assault);

    if (!assault) {
        return res.status(400).json({error: 'No such employee'})
    }
};

module.exports = { getAllAssault, createAssault, updateAssault, getAssault };