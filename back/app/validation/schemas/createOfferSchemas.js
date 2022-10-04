const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string()

        .min(10)
        .max(60)
        .required(),
    description: Joi.string()

        .min(50)
        .max(500)
        .required(),
    searchProfile: Joi.string()

        .min(20)
        .max(150)
        .required(),

}).required();
