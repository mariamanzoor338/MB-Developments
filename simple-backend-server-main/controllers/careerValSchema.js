const joi = require("joi")


const careerSchema = joi.object({
    heading: joi.string().max(60).min(3).required(),
    description: joi.string().min(5).required()

})


module.exports = careerSchema;