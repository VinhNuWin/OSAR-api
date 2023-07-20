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
        fullName: req.body.fullName,
        date: req.body.date,
        address: {
            streetAddress: req.body.streetAddress,
            city: req.body.city,
            state: req.body.state,
            zipcode: req.body.zipcode,
        },
        alcoholInvolved: req.registryReport.alcoholInvolved,
        drugsInvolved: req.body.drugsInvolved,
        wasSurvivorAsleep: req.body.wasSurvivorAsleep,
        verbalThreats: req.body.verbalThreats,
        resistanceOffered: req.body.resistanceOffered,
        detailsOfIncident: req.body.detailsOfIncident,
        areasAssaulted: req.body.areasAssaulted,
        evidence: req.body.evidence,
        useOfWeapons: req.body.useOfWeapons,
        useOfRestraints: req.body.useOfRestraints,
        assailantGender: req.body.assailantGender,
        raceEthnicity: req.body.raceEthnicity,
        assailantsFullName: req.body.assailantsFullName,
        survivorGender: req.body.survivorGender,
    }

    try{
     assaultReport = await Assault.create({ registryReport, registryType })
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