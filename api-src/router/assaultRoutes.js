const express = require('express');
const router = express.Router();
const { getAllAssault, updateAssault, createAssault, getAssault } = require('../database/assault');

router.use(express.json());

router.get('/', getAllAssault)

router.get('/:id', getAssault)

router.post('/', createAssault) 

router.patch('/:id', updateAssault)

module.exports = router;