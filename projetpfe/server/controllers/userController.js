const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
}

// login a user
const loginUser = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await User.login(email, password)

    // create a token
    const token = createToken(user._id)

    res.status(200).json({email, token, role: user.role, nomPrenom: user.nomPrenom ,user_id: user._id });
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const signupUser = async (req, res) => {
  const { email, password, role, nomPrenom } = req.body;

  try {
    const user = await User.signup(email, password, role, nomPrenom );

    // create a token
    const token = createToken(user._id);

    // Envoi du nom d'utilisateur dans la réponse
    res.status(200).json({ email, token, role, nomPrenom, user_id: user._id });
    } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser }