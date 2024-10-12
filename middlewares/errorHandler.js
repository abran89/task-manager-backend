/**
 * Middleware to handle errors
 * Logs the error message and sends a JSON response with error details
 */
const errorHandler = (err, req, res, next) => {
    console.error('Error', err.message);
    const status = err.status || 500;
    res.status(status).json({
        message: err.message || 'Internal server error',
        errors: err.errors || null,
    });
};

module.exports = errorHandler;