const express = require('express');
const router = express.Router();
const { getAllEmployees, updateEmployee, createEmployee, getEmployee } = require('../database/employee');

router.use(express.json());

router.get('/', getAllEmployees)

router.get('/:id', getEmployee)

router.post('/', createEmployee) 

router.patch('/:id', updateEmployee)

module.exports = router;