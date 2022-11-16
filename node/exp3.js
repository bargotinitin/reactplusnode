const path = require("path")
const express = require("express");
const app = express();

const publicpath = path.join(__dirname, "public")

app.get('', (req, res) => {
  res.sendFile(`${publicpath}/index.html`)
})

app.get('*', (req, res) => {
  res.sendFile(`${publicpath}/nopage.html`)
})

app.listen(4500)
