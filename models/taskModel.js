const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConnect');

/**
 * Task model representing a task in the database
 * 
 * @module Task
 */

const Task = sequelize.define('Task', {
    /**
     * Unique identifier for the task
     * @type {number}
     * @readonly
     */
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    /**
     * Title of the task
     * Must be provided and cannot be null
     * @type {string}
     */
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    /**
     * Description of the task
     * Can be null if not provided
     * @type {string}
     */
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    tableName: 'tasks',
    timestamps: true,
});

module.exports = Task;
