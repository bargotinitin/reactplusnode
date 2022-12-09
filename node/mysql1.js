const mysql = require("mysql")

const con = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'test'
})

// con.connect((err) => {
//   if (err) {
//     console.log("error")
//   }
//   else {
//     console.log("Connected")
//   }
// })

con.query("select * from test", (err, result) => {
  console.log(result)
})
