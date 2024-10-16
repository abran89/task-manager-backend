require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./config/dbConnect');
const taskRoutes = require('./routes/taskRoutes');
const Task = require('./models/taskModel');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/tasks', taskRoutes);

app.use(errorHandler);

/**
 * Synchronize the Task model with the database
 * @returns {Promise}
 */
Task.sync({force: false})

const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000, async ()=> {
    console.log(`Server is running on port ${PORT}`);
    await dbConnection()
});