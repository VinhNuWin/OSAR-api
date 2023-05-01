require('dotenv').config();
const express = require('express');
const registryRoutes = require('./router/registryRoutes');
const usersRoutes = require('./router/usersRoutes');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./database/db');

const app = express();
// const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}));
app.use('/registry', registryRoutes);
app.use('/addUser', usersRoutes);

// app.post('/registry', (req, res) => {
//     const name = req.body.name
//     const email = req.body.email

//     console.log('addUser recieved api side');
// });

app.get('/', (req, res) => {
    res.sendStatus(200);
});

// app.post('/addUser', async (req,res) => {
//     const name = req.body.name
//     const email = req.body.email;
    

//     console.log('addUser2 api side recieved')
// });

app.listen(process.env.PORT, () => {
    console.log('API is listening on port', process.env.PORT);
});