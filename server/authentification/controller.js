const expressHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./userschema');
const { secretKey } = require("./config"); 

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
  res.json({ success: true, message: 'Vous avez accès à  protégé!', clientId: req.clientId });
};

const addClient = async (req, res) => {
    try {
        
        const { email, password } = req.body;
        console.log(req.body);
        const newuser = new Users ({ email, password });
        const saveduser = await newuser.save();
        res.status(201).json({
            email: saveduser.email,
            password: saveduser.password,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erreur interne du serveur" });
    }
};

  
module.exports = { authenticateUser,addClient };