// Require dependencies
var express = require("express");
var path = require("path");

// Set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up express app to handle data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes - one to index, one to notes 
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/develop/public/notes.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/develop/public/index.html"));
});

app.post("notesfile", function(req, res) {
  // Post notes logic goes here
})

app.get("/api/notes", function(req, res){
  // Should read the db.json file and return all saved notes as JSON
})

app.post("/api/notes", function(req, res){
  // Should receive a new note to save on the request body, add it to 
  // the db.json file, and return the new note to the client 
})

app.delete("/api/notes:id", function(req, res){
  // Should receive a query parameter containing the ID of a note to 
  // delete. This means you'll need to find a way to give each note a unique
  // ID when it's saved. In order to delete a note, you'll need to read all the
  // notes from the db.json file, remove the note with the given ID property,
  // and then rewrite the notes to the db.json file. 
})

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log(__dirname);
});
