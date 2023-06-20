const express = require('express');
const router = express.Router();
const { getAllRegistries, updateRegistry, createRegistry, getRegistry } = require('../database/registry');

router.get('/', getAllRegistries)

router.get('/:id', getRegistry)

router.post('/', createRegistry) 

router.put('/:id', updateRegistry)

module.exports = router;
