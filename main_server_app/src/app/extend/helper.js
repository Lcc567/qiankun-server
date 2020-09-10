const JWT = require('jsonwebtoken');

module.exports = {
  verifyToken(token, secret) {
    let result
    try {
      result = JWT.verify(token, secret)
    } catch (error) {
      throw new Error('token已过期')
    }
    return result
  },
  updateToken(data, secret) {
    const token = JWT.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: data
    }, secret);
    return token;
  }
}