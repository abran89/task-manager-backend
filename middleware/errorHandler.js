/**
 * Middleware to handle errors
 * @param {Error} err - The error object
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 * @param {Function} next - The function to pass to the next middleware
 */
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Internal server error', error: err.message });
};

module.exports = errorHandler;