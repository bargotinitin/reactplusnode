const mongoose = require("mongoose")
const main = async() => {
  await mongoose.connect("mongodb://localhost:27017/localdb")
}
main();
module.exports = mongoose
