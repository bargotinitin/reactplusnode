const mongoose = require("./mongoose_config")
const testSchema = new mongoose.Schema({
  name: String,
  price: Number,
  sku: String,
  image_path: String,
  discount: Boolean
})
const testModel = new mongoose.model('products', testSchema)
module.exports = testModel
