const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const colors = require('colors');
const port = process.env.PORT || 5000;
const dbConnection = require('./config/dbconnection')

dbConnection();

app.use(express.json())

app.use('/api/goals', require('./routes/goalRoutes'));
app.use('/api/user', require('./routes/userRoutes'));

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`);
})