const authService = require('../service/auth.service');

const register = async (req, res) => {
  try {
    const data = await authService.register(req.body);
    res.status(201).json({ message: 'User registered', data:data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = await authService.login(req.body);
    res.status(200).json({ message: 'Login successful', data:data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  register,
  login,
};
