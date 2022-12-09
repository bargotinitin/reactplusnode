const express = require("express")
const EventEmitter = require("events")
const app = express()

let count = 0;
const event = new EventEmitter()
event.on("countAPI", () => {
  count++;
  console.log("counter = " + count)
})

app.get("/home", (req, resp) => {
  resp.send("Api called")
  event.emit("countAPI")
})

app.get("/search", (req, resp) => {
  count++;
  console.log("counter = " + count)
  resp.send("Search API called")
})

app.listen(4500)
