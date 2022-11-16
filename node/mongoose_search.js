const productModel = require('./mongoose_collection')
const express = require('express')
const app = express();

app.use(express.json());

app.get('/search/:key', async(req, resp) => {
  let data = await productModel.find(
    {"name": {$regex: req.params.key}}
  )
  resp.send(data)
})

app.listen(4500)
