const Joi = require('joi');

module.exports = Joi.object({
    oldPassword: Joi.string()
        .required(),
    newPassword: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .required(),
    newPasswordConfirm: Joi.any()
        .valid(Joi.ref('newPassword'))
        .required(),

}).min(1).required();
