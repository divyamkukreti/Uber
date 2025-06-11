const { findUserByEmail, createUser } = require('../repository/user.repository');
const { hashPassword, comparePasswords } = require('../utils/hash.util');
const { generateToken } = require('../utils/jwt.util');

const register = async ({ name, email, password }) => {
  const existingUser = await findUserByEmail(email);
  if (existingUser) throw new Error("Email already exists");

  const hashedPassword = await hashPassword(password);
  const user = await createUser({ name, email, password: hashedPassword });

  const token = generateToken({ id: user._id, email: user.email });

  return { user, token };
};



const login = async ({ email, password }) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("User is not registered");

  const isMatch = await comparePasswords(password, user.password);
  if (!isMatch) throw new Error("Password does not match");

  const token = generateToken({ id: user._id, email: user.email });

  return { user, token };
};



module.exports = {
  register,
  login,
};
