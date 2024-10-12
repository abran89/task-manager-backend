const express = require('express');
const router = express.Router();
const { taskValidationRules, taskIdValidationRules, validate } = require('../middlewares');

const {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
} = require('../controllers/taskController');

/**
 * @route POST /tasks
 * @group Tasks - Operations about tasks
 * @param {Task.model} task.body.required - The task object
 * @returns {Task.model} 201 - The created task
 * @returns {Error} 400 - Validation error
 */
router.post('/', taskValidationRules, validate, createTask);

/**
 * @route GET /tasks
 * @group Tasks - Operations about tasks
 * @returns {Array.<Task.model>} 200 - The list of tasks
 * @returns {Error} 500 - Internal server error
 */
router.get('/', getAllTasks);

/**
 * @route GET /tasks/{id}
 * @group Tasks - Operations about tasks
 * @param {number} id.path.required - Task ID
 * @returns {Task.model} 200 - The task object
 * @returns {Error} 404 - Task not found
 */
router.get('/:id', taskIdValidationRules, validate, getTaskById);

/**
 * @route PUT /tasks/{id}
 * @group Tasks - Operations about tasks
 * @param {number} id.path.required - Task ID
 * @param {Task.model} task.body.required - The task object
 * @returns {Task.model} 200 - The updated task
 * @returns {Error} 400 - Validation error
 * @returns {Error} 404 - Task not found
 */
router.put('/:id', taskIdValidationRules, taskValidationRules, validate, updateTask);

/**
 * @route DELETE /tasks/{id}
 * @group Tasks - Operations about tasks
 * @param {number} id.path.required - Task ID
 * @returns {Error} 204 - No content
 * @returns {Error} 404 - Task not found
 */
router.delete('/:id', taskIdValidationRules, validate, deleteTask);

module.exports = router;