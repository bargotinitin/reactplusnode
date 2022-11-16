const express = require('express')
const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const database = 'localdb';
const client = new MongoClient(url)

const app = express();

app.post('/', (req, resp) => {
  resp.send({'name': 'Doctor Strange'})
})

app.listen(4500)
