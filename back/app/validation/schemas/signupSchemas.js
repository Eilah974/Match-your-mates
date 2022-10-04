const Joi = require('joi');

module.exports = Joi.object({
    username: Joi.string()
        .min(3)
        .max(20)
        .required(),

    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
        .required(),
    passwordConfirm: Joi.any()
        .valid(Joi.ref('password'))
        .required(),
    userType: Joi.required(),

}).required();
