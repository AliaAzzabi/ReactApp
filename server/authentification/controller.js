const expressHandler = require("express-async-handler");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('./userschema');

const authenticateUser = expressHandler(async (req, res) => {
  try {
    const { email, password } = req.body; 
    const user = await Users.findOne({ email }); 

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ success: true, token });
      } else {
        res.status(401).json({ success: false, error: 'Invalid credentials' });
      }
    } else {
      res.status(401).json({ success: false, error: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: 'Authentication error' });
  }
});
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