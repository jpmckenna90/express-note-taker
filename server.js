// Require dependencies
var express = require("express");
var path = require("path");

// Set up express app
var app = express();
var PORT = 3000;

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

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
  console.log(__dirname);
});
