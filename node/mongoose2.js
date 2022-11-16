const mongoose = require("mongoose")

const main = async() => {
  await mongoose.connect("mongodb://localhost:27017/localdb")
  const testSchema = new mongoose.Schema({
    name: String,
    price: Number
  })
  console.log(testSchema)

  const testModel = new mongoose.model('products', testSchema)
  console.log(testModel)

  let data = await testModel.updateOne(
    {"name": "test data from mongoose"},
    {$set: {
      "price": 9999
    }}
  )
  console.log(data);

}
main();
