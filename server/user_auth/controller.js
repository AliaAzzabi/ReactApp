const expressHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./userschema');
const { secretKey } = require("./config"); 
const {verifyToken } = require("./authmiddleware");
const authenticateUser = expressHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    
    const user = await Users.findOne({ email, password });

    if (user) {
      const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '2h' });
      res.status(200).json({ success: true, user });
      
    } else {
      res.status(401).json({ success: false, error: 'Identifiants incorrects' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Erreur lors de l\'authentification' });
  }
});
const protectedRouteHandler = (req, res) => {
  res.json({ success: true, message: 'Vous avez accès à  protégé!', userId: req.userId });
};



  
module.exports = { authenticateUser ,protectedRouteHandler};