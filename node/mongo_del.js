const express = require('express')
const mongoDb = require("mongodb")
const dbConnect = require('./mongoconnect')

const app = express();
app.use(express.json())

app.delete('/:id', async(req, resp) => {

  let db= await dbConnect();
  data = await db.deleteOne(
    {_id: new mongoDb.ObjectId(req.params.id)},
  );
  console.log(data)

  if (data.acknowledged) {
    resp.send({"message": "success"})
  }

})


app.listen(4500)
