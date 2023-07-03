const express = require('express');
const router = express.Router();
const { getAllElderly, updateElderly, createElderly, getElderly } = require('../database/elderly');

router.use(express.json());

router.get('/', getAllElderly)

router.get('/:id', getElderly)

router.post('/', createElderly) 

router.patch('/:id', updateElderly)

module.exports = router;