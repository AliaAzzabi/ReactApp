const jwt = require('jsonwebtoken');
const { secretKey } = require('./config'); 

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1] || req.headers['x-access-token']; 

  if (!token) {
    return res.status(401).json({ success: false, error: 'No token provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ success: false, error: 'Invalid token' });
    }

    req.clientId = decoded.clientId;
    next();
  });
};

module.exports = { verifyToken };
