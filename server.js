// used express for backend

var express      = require('express')
var cookieParser = require('cookie-parser')
var path = require("path");
var bodyParser = require("body-parser");

var holder1;
var holder2;
var holder3;
var holder4;
var Port = 8080;
var app = express();

// parsed to get cookie and body variable data
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/test.html"));
  });
  
  // stores the class data for all divs
  app.post('/div1', function(req, res) {
    holder1 = req.body;
  })
  app.post('/div2', function(req, res) {
    holder2 = req.body;
  })
  app.post('/div3', function(req, res) {
    holder3 = req.body;
  })
  app.post('/div4', function(req, res) {
    holder4 = req.body;
  })

  // on start, the class data for each div1 is set from the backend. That is if there is data. 
  app.get("/div1", function(req, res) {
      res.json(holder1)
  })
  app.get("/div2", function(req, res) {
    res.json(holder2)
}) 
app.get("/div3", function(req, res) {
  res.json(holder3)
}) 
app.get("/div4", function(req, res) {
  res.json(holder4)
})
  
// To notify user that the port is indeed listening.
  app.listen(Port, function() {
      console.log("app listening on port " + Port);
  });
  