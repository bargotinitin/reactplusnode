const express = require('express')
const dbConnect = require('./mongoconnect')

const app = express();
app.use(express.json())

app.post('/', async(req, resp) => {

  let db= await dbConnect();
  data = await db.insertOne(req.body);
  console.log(data)

  if (data.acknowledged) {
    resp.send({"message": "success"})
  }

})

app.listen(4500)
