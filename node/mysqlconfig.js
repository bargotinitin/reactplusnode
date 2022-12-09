const mysql = require("mysql")
const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'test'
})
module.exports = con;
