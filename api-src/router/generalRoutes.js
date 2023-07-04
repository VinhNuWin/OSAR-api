const express = require('express');
const router = express.Router();
const { getAllGeneral, updateGeneral, createGeneral, getGeneral } = require('../database/General');

router.use(express.json());

router.get('/', getAllGeneral)

router.get('/:id', getGeneral)

router.post('/', createGeneral) 

router.patch('/:id', updateGeneral)

module.exports = router;