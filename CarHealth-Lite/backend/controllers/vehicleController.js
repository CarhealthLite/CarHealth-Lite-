const ADODB = require('node-adodb');
const db = ADODB.open(`Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${process.env.ACCESS_DB_PATH}`);

exports.getVehicles = async (req, res) => {
  const vehicles = await db.query('SELECT * FROM Vehicles');
  res.json(vehicles);
};

exports.addVehicle = async (req, res) => {
  const { Brand, Model, Mileage, HaldexStatus, LastMaintenance } = req.body;
  await db.execute(
    `INSERT INTO Vehicles (Brand, Model, Mileage, HaldexStatus, LastMaintenance) VALUES ('${Brand}','${Model}',${Mileage},'${HaldexStatus}','${LastMaintenance}')`
  );
  res.json({ message: 'Vehicle added' });
};
