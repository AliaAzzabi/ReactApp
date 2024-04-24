
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../usershema');

const authenticateUser = expressHandler(async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

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


module.exports = { authenticateUser };