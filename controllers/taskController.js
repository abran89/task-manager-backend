const Task = require('../models/taskModel');

/**
 * Create a new task
 * Validates input data and creates a new task in the database
 */
const createTask = async (req, res, next) => {
    const { title, description } = req.body
    try {
        const newTask = await Task.create({ title, description })
        res.status(201).json(newTask);
    } catch (error) {
        next(error);
    }
}

/**
 * Get all tasks
 */
const getAllTasks = async (req, res, next) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json(tasks);
    } catch (error) {
        next(error);
    }
};

/**
 * Get a task by ID
 * Responds with the task if found or a 404 error if not found
 */
const getTaskById = async (req, res, next) => {
    const { id } = req.params
    try {
        const task = await Task.findByPk(id)
        if (!task) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.status(200).json(task);
    } catch (error) {
        next(error);
    }
}

/**
 * Update a task by ID
 * Validates input data and updates the task in the database
 */
const updateTask = async (req, res, next) => {
    const { id } = req.params
    const { title, description } = req.body
    try {
        const [updated] = await Task.update({ title, description }, { where: { id } })
        if (!updated) {
            return res.status(404).json({ message: 'Task not found' })
        }
        const updatedTask = await Task.findByPk(id)
        res.status(200).json(updatedTask)
    } catch (error) {
        next(error)
    }
}

/**
 * Delete a task by ID
 * Removes the task from the database if found, or responds with a 404 error if not found
 */
const deleteTask = async (req, res, next) => {
    const { id } = req.params
    try {
        const deleted = await Task.destroy({ where: { id } })
        if (!deleted) {
            return res.status(404).json({ message: 'Task not found' })
        }
        res.status(204).send()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask
}