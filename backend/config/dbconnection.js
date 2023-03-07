const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const dbConnection = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connected to MongoDB ${con.connection.host}`.green.underline.bold);
    } catch (e) {
        console.log(e)
    }
}

module.exports = dbConnection; 