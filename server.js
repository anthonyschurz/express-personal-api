// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/example-username/express_self_api/README.md", // CHANGE ME
    base_url: "http://YOUR-APP-NAME.herokuapp.com", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/campsites", description: "E.g. Create a new campsite"} // CHANGE ME
    ]
  })
});

/*
 * JSON Endpoints
 */

 app.get('/api/profile', function profile(req, res) {
   
   res.json({message: "y" + uString + "ge"});
 });


app.get('/api/yuge', function yuge(req, res) {
  var uGenerator = Math.floor(Math.random()*100);
  var uString = new Array(uGenerator + 1).join("u");
  res.json({message: "y" + uString + "ge"});
});


app.get('/api/wall', function wall(req, res) {
//if request is in Spanish, generate wall

var wallArray = ["_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__",
"_|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|",
"___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|___|__"];
var wallConstructor = wallArray.join("\n");
res.json({ message: "\n" + wallConstructor })
});


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
