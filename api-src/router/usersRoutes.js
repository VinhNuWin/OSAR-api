const express = require('express');
const router = express.Router();
const { getAllUsers, updateUser, createUser, getUser } = require('../database/users');

router.get('/', getAllUsers)

router.get('/:id', getUser)

router.post('/', createUser) 

router.put('/:id', updateUser)

module.exports = router;
