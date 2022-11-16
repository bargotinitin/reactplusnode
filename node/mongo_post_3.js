const express = require('express')
const dbConnect = require('./mongoconnect')

const app = express();
app.use(express.json())

// app.put('/', async(req, resp) => {

//   let db= await dbConnect();
//   data = await db.updateOne(
//     {'name': req.body.name},
//     {$set: req.body}
//   );
//   console.log(data)

//   if (data.acknowledged) {
//     resp.send({"message": "success"})
//   }

// })

app.put('/:name', async(req, resp) => {

  let db= await dbConnect();
  data = await db.updateOne(
    {'name': req.params.name},
    {$set: req.body}
  );
  console.log(data)

  if (data.acknowledged) {
    resp.send({"message": "success"})
  }

})


app.listen(4500)
