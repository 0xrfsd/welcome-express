// index.js

// import express
let express = require('express')

// start app
let app = express();
	
// asign port
var port = process.env.port || 8080

// welcome message
app.get('/', (req, res) => res.send('Welcome to express'));

// launch app to the specified port
app.listen(port, function() {
  console.log("Running FirstRest on Port " + port);
})
