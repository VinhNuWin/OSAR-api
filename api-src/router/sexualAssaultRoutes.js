const express = require('express');
const router = express.Router();
const { getAllSexualAssault, updateSexualAssault, createSexualAssault, getSexualAssault } = require('../database/SexualAssault');

router.use(express.json());

router.get('/', getAllSexualAssault)

router.get('/:id', getSexualAssault)

router.post('/', createSexualAssault) 

router.patch('/:id', updateSexualAssault)

module.exports = router;