// Create web server
// Create a route /comments
// Create a route /comments/new
// Create a route /comments/:id
// Create a route /comments/:id/edit
// Create a route /comments/:id/delete

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.redirect('/comments');
});

// Fake comments
var comments = [
  {
      id: 1,
      text: "This is a comment"
        }
    ];