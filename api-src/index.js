require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');
const childrenRoutes = require('./router/childrenRoutes');
const spouseRoutes = require('./router/spouseRoutes');
const elderlyRoutes = require('./router/elderlyRoutes');
const employeeRoutes = require('./router/employeeRoutes');
const assaultRoutes = require('./router/assaultRoutes');
const generalRoutes = require('./router/generalRoutes');
const registryRoutes = require('./router/registryRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/children', childrenRoutes);
app.use('/spouse', spouseRoutes);
app.use('/elderly', elderlyRoutes);
app.use('/employee', employeeRoutes);
app.use('/assault', assaultRoutes);
app.use('/general', generalRoutes);
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

