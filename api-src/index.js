require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');
const usersRoutes = require('./router/usersRoutes');
const incidentRoutes = require('./router/incidentRoutes');
const elderlyRoutes = require('./router/elderlyRoutes');
const employeeRoutes = require('./router/employeeRoutes');
const registryRoutes = require('./router/registryRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/users', usersRoutes);
app.use('/incidents', incidentRoutes);
app.use('/elderly', elderlyRoutes);
app.use('/employeeRoutes', employeeRoutes);
app.use('/registry', registryRoutes);

app.use(function(req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, application/json');
})

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})


app.listen(process.env.PORT, () => {
    console.log('API is listening on port', process.env.PORT);
});

