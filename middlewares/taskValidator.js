const { body, param } = require('express-validator');

/**
 * Validation rules for creating and updating tasks  
 * These rules ensure that  
 * - The 'title' is a non-empty string  
 * - The 'description' is an optional string  
 */
const taskValidationRules = [
    body('title')
        .isString()
        .notEmpty()
        .withMessage('Title must be a non-empty string'),
    body('description')
        .optional()
        .isString()
        .withMessage('Description must be a string'),
];

/**
 * Validation rule for task ID  
 * This rule ensures that  
 * - The 'id' is an integer  
 */
const taskIdValidationRules = [
    param('id')
        .isInt()
        .withMessage('ID must be an integer'),
];

module.exports = {
    taskValidationRules,
    taskIdValidationRules
};