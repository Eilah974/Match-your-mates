const debug = require('debug')('Validator:log');
const { ApiError } = require('../helpers/errorHandler');

module.exports = (prop, schema) => async (request, _, next) => {
    try {
        debug(request[prop]);
        await schema.validateAsync(request[prop]);
        next();
    } catch (error) {
        next(new ApiError(error.details[0].message, { statusCode: 400 }));
    }
};
