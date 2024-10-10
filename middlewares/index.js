const taskValidator = require('./taskValidator');
const validator = require('./validate');

module.exports = {
    ...taskValidator,
    ...validator
};