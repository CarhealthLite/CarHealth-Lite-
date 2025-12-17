const express = require('express');
const router = express.Router();
const { getAISuggestion } = require('../controllers/aiController');

router.post('/problem', getAISuggestion);

module.exports = router;
