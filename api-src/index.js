require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');
const usersRoutes = require('./router/usersRoutes');
const incidentRoutes = require('./router/incidentRoutes');
const assailantRoutes = require('./router/assailantRoutes');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/users', usersRoutes);
app.use('/incidents', incidentRoutes);
app.use('/assailants', assailantRoutes);

app.use((req,res, next) => {
    console.log(req.path, req.method)
    next()
})


app.listen(process.env.PORT, () => {
    console.log('API is listening on port', process.env.PORT);
});

