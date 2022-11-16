const mongoose = require("./mongoose_config")

const main = async() => {
  const testSchema = new mongoose.Schema({
    name: String,
    price: Number
  })
  console.log(testSchema)

  const testModel = new mongoose.model('products', testSchema)
  console.log(testModel)

  let data = await testModel.find(
    {"name": "test data from mongoose"}
  )
  console.log(data);

}
main();
