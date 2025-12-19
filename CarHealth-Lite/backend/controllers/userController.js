const db = require('../database/database');
const { v4: uuidv4 } = require('uuid'); 
const moment = require('moment');

exports.signupUser = (req, res) => {
  const { Nume, Email, Password } = req.body;

  if (!Nume || !Email || !Password) {
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  const checkQuery = `SELECT * FROM [User] WHERE Email = ?`;
  db.query(checkQuery, [Email], (err, results) => {
    if (err) return res.status(500).json({ success: false, message: 'Database error', error: err });

    if (results.length > 0) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const insertQuery = `INSERT INTO [User] (ID_User, Nume, Email, Password, Created_At) VALUES (?, ?, ?, ?, ?)`;
    const id = uuidv4();
    const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

    db.query(insertQuery, [id, Nume, Email, Password, createdAt], (err2) => {
      if (err2) return res.status(500).json({ success: false, message: 'Database error', error: err2 });

      res.json({ success: true, message: 'User created successfully' });
    });
  });
};
