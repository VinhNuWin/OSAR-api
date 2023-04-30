const express = require('express');
const router = express.Router();
const { getAllAssailants, updateAssailant, createAssailant, getAssailant } = require('../database/assailants');

router.use(express.json());

router.get('/', getAllAssailants)

router.get('/:id', getAssailant)

router.post('/', createAssailant) 

router.put('/:id', updateAssailant)

module.exports = router;