const joi = require("joi")


const heroSchema = joi.object({
    punchline: joi.string().max(60).min(3).required(),
    description: joi.string().max(150).min(5).required()

})


module.exports = heroSchema