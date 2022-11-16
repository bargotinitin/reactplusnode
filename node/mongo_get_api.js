const express = require('express')
const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = 'localdb';
const client = new MongoClient(url)

const app = express();

app.get('/', async(req, resp) => {
  let result = await client.connect();
  let db = result.db(database)
  let collection = db.collection('test')
  let response = await collection.find({}).toArray()
  resp.send(response)
})

app.listen(4500)
