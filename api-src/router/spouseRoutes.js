const express = require('express');
const router = express.Router();
const { getAllSpouse, updateSpouse, createSpouse, getSpouse } = require('../database/spouse');

router.use(express.json());

router.get('/', getAllSpouse)

router.get('/:id', getSpouse)

router.post('/', createSpouse) 

router.patch('/:id', updateSpouse)

module.exports = router;