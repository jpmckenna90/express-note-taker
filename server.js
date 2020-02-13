// Require dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("../express-note-taker/Develop/db/db.json");

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
  console.log(req.params);
  // okay, found the ID in the request...now to use it! 

  
  // Should receive a query parameter containing the ID of a note to
  // delete. This means you'll need to find a way to give each note a unique
  // ID when it's saved. In order to delete a note, you'll need to read all the
  // notes from the db.json file, remove the note with the given ID property,
  // and then rewrite the notes to the db.json file.
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log(__dirname);
});
