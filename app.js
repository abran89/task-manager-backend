const express = require('express');
const { dbConnection } = require('./config/dbConnect');

const app = express();

app.use(express.json());

app.listen(4000, async ()=> {
    console.log('Server is running on port 4000')
    await dbConnection()
});