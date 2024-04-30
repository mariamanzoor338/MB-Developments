const jwt = require("jsonwebtoken")
const Joi = require("joi")
require("dotenv").config()

const Username = 'mbdevelopment161@gmail.com';
const Password = 'mb4455devs@554';
// Joi schema for validation
const signInSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
});

const signIn = (req, res) => {

    const { error, value } = signInSchema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    if (value.username !== Username || value.password !== Password) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    // If credentials are valid, create a JWT token
    const token = jwt.sign({ username: value.username }, process.env.SECRET_KEY, { expiresIn: '30d' });

    // Respond with the token
    res.json({ token });
};


module.exports = { signIn,Username }
