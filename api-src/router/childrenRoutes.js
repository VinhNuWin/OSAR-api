const express = require('express');
const router = express.Router();
const { getAllChildren, updateChildren, createChildren, getChildren } = require('../database/Children');

router.use(express.json());

router.get('/', getAllChildren)

router.get('/:id', getChildren)

router.post('/', createChildren) 

router.patch('/:id', updateChildren)

module.exports = router;