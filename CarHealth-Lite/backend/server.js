const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/auth', userRoutes);

app.get('/', (req, res) => {
    res.send('CarHealth-Lite backend is running 🚗');
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
