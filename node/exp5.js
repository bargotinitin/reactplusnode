const path = require("path")
const express = require("express");
const app = express();

const publicpath = path.join(__dirname, "public")

const reqFilter = (req, resp, next) => {
  if (!req.query.argu) {
    resp.send("Please provide query param.")
  }
  else if (req.query.argu == "test") {
    resp.sendFile(`${publicpath}/nopage.html`)
  }
  else {
    next();
  }
}

// app.use(reqFilter); // applies to all.

const route = express.Router();
route.use(reqFilter);

app.get('', (req, res) => {
  res.sendFile(`${publicpath}/index.html`)
})

app.get('/nopage', reqFilter, (req, res) => {
  res.sendFile(`${publicpath}/nopage.html`)
})

app.get('/about', (req, res) => {
  res.sendFile(`${publicpath}/about.html`)
})

route.get('/test', (req, res) => {
  res.sendFile(`${publicpath}/test.html`)
})

route.get('/contact', (req, res) => {
  res.sendFile(`${publicpath}/contact.html`)
})

app.use(route);
app.listen(4500)
