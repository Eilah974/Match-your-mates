const Joi = require('joi');

module.exports = Joi.object({
    title: Joi.string()
        .min(10)
        .max(60),
    description: Joi.string()
        .min(50)
        .max(500),
    search_profile: Joi.string()
        .min(20)
        .max(150),
}).min(1).required();
