const ADODB = require('node-adodb');
const path = require('path');

const dbPath = path.join(__dirname, 'CarHealth.accdb');

const connection = ADODB.open(
  `Provider=Microsoft.ACE.OLEDB.12.0;Data Source=${dbPath};Persist Security Info=False;`
);

module.exports = connection;
