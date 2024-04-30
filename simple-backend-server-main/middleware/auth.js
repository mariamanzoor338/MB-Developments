const jwt = require("jsonwebtoken");
const { Username } = require("../controllers/auth")
require("dotenv").config();
module.exports = async (req, res, next) => {
    console.log("Reached RequireAuth middleware");
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json("you must be logged in");
    }

    const token = authorization.split(" ")[1];

    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
            return res.status(401).json("you must be logged in");
        }

        const { username } = payload;
        if (username !== Username)
            return res.status(401).json("you must be logged in");
        req.username = username;
        next();
    });
};
