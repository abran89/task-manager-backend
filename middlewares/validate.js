const { validationResult } = require('express-validator');

/**
 * Middleware to validate incoming request data based on defined validation rules
 * This middleware checks for validation errors in the request
 * 
 * If validation fails:
 * - An error object is created with status 400 and details about the validation errors
 * - The error is passed to the next middleware, which should be the global error handler
 * 
 * If validation succeeds:
 * - The middleware calls `next()` to proceed to the controller for further processing
 */
const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation error');
        error.status = 400;
        error.errors = errors.array();
        return next(error);
    }
    next();
};

module.exports = validate;