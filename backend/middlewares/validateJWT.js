const expressAsyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateJWT = expressAsyncHandler(async (req, res, next) => {
    const token = req.cookies.Token;
    console.log(req.cookies);
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                console.log("Token not verified!");
                res.status(401).send("Token not verified!");
            } else {
                console.log("Token validated!");
                req.user = decoded.user;
                next();
            }
        });
    } else {
        console.log("No token provided!");
        res.status(401).send("No token provided!");
    }
});

module.exports = { validateJWT };