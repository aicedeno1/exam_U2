require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3008;

mongoose.connect(process.env.MONGODB_URI ||'mongodb+srv://cedeno:cedeno2@cluster0.zfqak3j.mongodb.net/HDMICable?appName=Cluster0');
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());


const hdmiCableRoutes = require('./routes/hdmiCableRoutes');
app.use('/cables', hdmiCableRoutes);


app.listen(port, () => console.log(`Server is running on port ${port}`));