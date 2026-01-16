const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const connectDB = require('./config/db');

const envPath = fs.existsSync(path.join(__dirname, 'config.env'))
  ? path.join(__dirname, 'config.env')
  : path.join(__dirname, '.env');
dotenv.config({ path: envPath });
connectDB();

const app = express();

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

app.use('/auth', require('./routes/authRoutes'));
app.use('/api', require('./routes/diagnosticRoutes'));

const { protect } = require('./middleware/authMiddleware');
app.get('/api/test', protect, (req, res) => {
  res.json({ success: true, message: `Bine ai venit ${req.user.name}!` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
