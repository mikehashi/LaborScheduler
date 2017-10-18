const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
// const empController = require(__dirname + "/controllers/empController.js");
const Employee = require("./models/Employee.js");
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
// app.use(routes);

// app.get("/api/emps", empController.findAll);
app.get("/api/emps", function(req, res) {
	Employee
      .find({}, function(error, doc) {
      	if (error) {
      		console.log(error);
      	}
      	else {
      		res.json(doc);
      	}
      })
      // .sort({ date: -1 })
});
  // .post(empController.create);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB



mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/laborDB",
  {
    useMongoClient: true
    
  }

);

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", function() {
	console.log("mongoose connection successful");
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
