const express = require('express');
const router = express.Router();
const { getAllIncidents, updateIncident, createIncident, getIncident, deleteIncident } = require('../database/incidents');


router.get('/', getAllIncidents)

router.get('/:id', getIncident)

router.post('/', createIncident) 

router.patch('/:id', updateIncident)

router.delete('/:id', deleteIncident)

module.exports = router;
