const Vehicle = require('../models/Vehicle');

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find({ user: req.user._id });
    res.json({ success: true, vehicles });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Eroare la obținerea mașinilor' });
  }
};

const addVehicle = async (req, res) => {
  try {
    const { make, model, year } = req.body;
    const vehicle = new Vehicle({ user: req.user._id, make, model, year });
    const createdVehicle = await vehicle.save();
    res.status(201).json({ success: true, vehicle: createdVehicle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Eroare la adăugarea mașinii' });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Mașina nu a fost găsită' });
    }

    vehicle.make = req.body.make || vehicle.make;
    vehicle.model = req.body.model || vehicle.model;
    vehicle.year = req.body.year || vehicle.year;

    const updatedVehicle = await vehicle.save();
    res.json({ success: true, vehicle: updatedVehicle });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Eroare la actualizarea mașinii' });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Mașina nu a fost găsită' });
    }

    await vehicle.remove();
    res.json({ success: true, message: 'Mașina a fost ștearsă' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Eroare la ștergerea mașinii' });
  }
};

module.exports = { getVehicles, addVehicle, updateVehicle, deleteVehicle };
