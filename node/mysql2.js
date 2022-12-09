const express = require("express")
const app = express();
const con = require("./mysqlconfig")

app.get('/', (req, resp) => {
  con.query("select * from test", (err, result) => {
    resp.send(result)
  })
})

app.use(express.json())
app.post('/', (req, resp) => {
  // const data = {
  //   name: "John",
  //   job: "Designer",
  //   salary: 300000
  // }

  const data = req.body;
  con.query('INSERT INTO test SET ?', data, function (error, results, fields) {
    if (error) throw error;
    resp.send(results);
  });

})

app.put('/', (req, resp) => {
  const data = req.body;
  con.query('Update test SET name= ?, job = ?, salary = ? where id = ?', data, function (error, results, fields) {
    if (error) throw error;
    resp.send(results);
  });
})

app.delete('/:id', (req, resp) => {
  const data = req.params.id;
  con.query('DELETE from test where id = ?', data, function (error, results, fields) {
    if (error) throw error;
    resp.send(results);
  });
})


app.listen(4500)
