const jwt = require('jsonwebtoken')

function signToken(payload) {
  const token = jwt.sign(payload, process.env.SECRET)
  return token
}

function verifyToken(token) {
  const decode = jwt.verify(token, process.env.SECRET)
  return decode
}

module.exports = { signToken, verifyToken }