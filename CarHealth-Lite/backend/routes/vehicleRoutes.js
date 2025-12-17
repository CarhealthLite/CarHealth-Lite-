const express = require('express');
const router = express.Router();
const { getVehicles, addVehicle } = require('../controllers/vehicleController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getVehicles);
router.post('/', protect, addVehicle);

module.exports = router;
