const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = 'localdb';
const client = new MongoClient(url)

// let result = client.connect();
// console.log(result)
// var collection;
// result.then((response) => {
//   let db = response.db(database)
//   collection = db.collection('test')
//   console.log("Provided collection = " + collection)
// })
// module.exports = collection;

async function dbConnect() {
  let result = await client.connect();
  let db = result.db(database)
  return db.collection('test')
}
module.exports = dbConnect;
