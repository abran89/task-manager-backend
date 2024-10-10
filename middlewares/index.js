const taskValidator = require('./taskValidator');
const validate = require('./validate');

module.exports = {
    ...taskValidator,
    validate,
};