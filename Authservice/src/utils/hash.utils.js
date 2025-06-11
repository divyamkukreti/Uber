const bcrypt = require('bcrypt');

const hashPassword = async (plain) => await bcrypt.hash(plain, 10);
const comparePasswords = async (plain, hashed) => await bcrypt.compare(plain, hashed);

module.exports = {
  hashPassword,
  comparePasswords,
};

