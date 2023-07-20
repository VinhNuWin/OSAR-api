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
        registryId: req.body.registryId,
        registryType: req.body.registryType,
        fullName: req.body.fullName,
        title: req.body.title,
        date: req.body.date,
        address: req.body.address,
        peopleInvolved: req.body.peopleInvolved,
        detailsOfIncident: req.body.detailsOfIncident,
        witnesses: req.body.witnesses,
        incidentOutcome: req.body.incidentOutcome,
        abilitiesAffected: req.body.abilitiesAffected,
        seekedMedicalAttention: req.body.seekedMedicalAttention,
        reportedToHigherPersonel: req.body.reportedToHigherPersonel,
        actionsTakenSinceIncident: req.body.actionsTakenSinceIncident,
        personalAffect: req.body.personalAffect,
        additionalComments: req.body.additionalComments,
    };
    console.log(req.body);

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