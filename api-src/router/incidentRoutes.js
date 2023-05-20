const express = require('express');
const router = express.Router();
const { getAllIncidents, updateIncident, createIncident, getIncident } = require('../database/incidents');


router.get('/', getAllIncidents)

router.get('/:id', getIncident)

router.post('/', createIncident) 

router.put('/patch/:id', updateIncident)

module.exports = router;
