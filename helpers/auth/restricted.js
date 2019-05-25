const jwt = require("jsonwebtoken");

const secrets = require("../../config/keys").jwtSecret;

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ error: "You have no access." });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ error: "You have no access." });
  }
};
