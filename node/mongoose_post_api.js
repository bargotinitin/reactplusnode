const mongoose = require("./mongoose_config")
const express = require('express')
const app = express();

app.use(express.json());

app.get('/', async(req, resp) => {

  const testSchema = new mongoose.Schema({
    name: String,
    price: Number
  })
  const testModel = new mongoose.model('products', testSchema)

  let data = await testModel.find(
    {"name": "test data from mongoose"}
  )

  resp.send(data)
})

app.post('/', async(req, resp) => {
  const testSchema = new mongoose.Schema({
    name: String,
    price: Number
  })
  const testModel = new mongoose.model('products', testSchema)

  let data = await testModel(req.body)
  let result = await data.save()
  resp.send(result)
})
app.delete('/delete/:_id', async(req, resp) => {
  const testSchema = new mongoose.Schema({
    name: String,
    price: Number
  })
  const testModel = new mongoose.model('products', testSchema)
  let data = await testModel.deleteOne(req.params)
  resp.send(data)
})

app.put('/update/:_id', async(req, resp) => {
  const testSchema = new mongoose.Schema({
    name: String,
    price: Number
  })
  const testModel = new mongoose.model('products', testSchema)
  let data = await testModel.updateOne(
    req.params,
    {
      $set: {"price": 90000}
    }

  )
  resp.send(data)
})

app.put('/update/body/:_id', async(req, resp) => {
  const testSchema = new mongoose.Schema({
    name: String,
    price: Number
  })
  const testModel = new mongoose.model('products', testSchema)
  let data = await testModel.updateOne(
    req.params,
    {
      $set: req.body
    }
  )
  resp.send(data)
})

app.listen(4500)
