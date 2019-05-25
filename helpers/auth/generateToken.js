const jwt = require("jsonwebtoken");

const secrets = require("../../config/keys").jwtSecret;

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets, options);
}
