const path = require("path")
const express = require("express");
const app = express();

const publicpath = path.join(__dirname, "public")

app.set('view engine', 'ejs');

app.get('', (req, res) => {
  res.sendFile(`${publicpath}/index.html`)
})

app.get('/profile', (req, res) => {

  const user = {
    'name' : "hero",
    'job': "Saving people"
  }
  res.render('profile', {user});
})

app.get('*', (req, res) => {
  res.sendFile(`${publicpath}/nopage.html`)
})

app.listen(4500)
