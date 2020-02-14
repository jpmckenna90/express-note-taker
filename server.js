// Require dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./develop/db/db.json");

// Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/develop/public")));

// Routes - one to index, one to notes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/develop/public/notes.html"));
});

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/develop/public/index.html"));
});

app.get("/api/notes", function(req, res) {
  return res.json(db);
});

app.post("/api/notes", function(req, res) {
  db.push(req.body);
  fs.writeFile("develop/db/db.json", JSON.stringify(db), err => {
    if (err) throw err;
  });
  res.send();
});

app.delete(`/api/notes/:id`, function(req, res) {
  
  const chosen = req.params.id;
  const index = db.findIndex( note => note.id === chosen);
  db.splice(index, 1);
  fs.writeFile("develop/db/db.json", JSON.stringify(db), err => {
    if (err) throw err;
  });
  res.send();
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log(__dirname);
});
