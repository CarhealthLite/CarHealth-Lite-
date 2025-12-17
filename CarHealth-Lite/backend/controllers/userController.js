const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const ADODB = require('node-adodb');
const db = ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${process.env.ACCESS_DB_PATH}`);

const generateToken = (email) => jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1d' });

exports.signupUser = async (req, res) => {
  const { email, password } = req.body;
  const hash = bcrypt.hashSync(password, 10);

  await db.execute(`INSERT INTO Users (Email, Password) VALUES ('${email}', '${hash}')`);
  res.json({ message: 'User registered' });
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  const users = await db.query(`SELECT * FROM Users WHERE Email='${email}'`);
  if (!users[0]) return res.status(400).json({ error: 'User not found' });

  if (bcrypt.compareSync(password, users[0].Password)) {
    res.json({ token: generateToken(email) });
  } else {
    res.status(400).json({ error: 'Invalid password' });
  }
};
