require('dotenv').config(); 
const { Sequelize } = require('sequelize');

/**
 * Sequelize instance initialized with environment variables for the database connection
 * 
 * @type {Sequelize}
 */
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
    }
);

/**
 * Function to establish the database connection using Sequelize
 * 
 * @returns {Promise<void>}
 */

const dbConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established');
       
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

module.exports = {
    dbConnection,
    sequelize
}