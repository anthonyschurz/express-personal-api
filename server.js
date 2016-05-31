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
 * JSON Endpoints
 */

 // Profile of The Donald

 app.get('/api/profile', function profile(req, res) {
   res.json({
     name: 'Donald John Trump',
     image: 'http://bit.ly/1LL56b3',
     residence: 'Trump Tower, Manhattan',
     net_worth: '4.5B' || '10B',
     wives: [
          { name: 'Ivana Zelníčková', status: 'ex' },
          { name: 'Marla Maples', status: 'ex' },
          { name: 'Melania Knauss', status: 'active' },
        ],
     children: [
          { name: 'Ivanka Trump', relationship: 'daughter', would_date: true },
          { name: 'Eric Trump', relationship: 'son' },
          { name: 'Donald Trump, Jr.', relationship: 'son' },
          { name: 'Tiffany Trump', relationship: 'daughter' },
          { name: 'Barron Trump', relationship: 'son' },
          ]
 });
 });

// Get a 'yuge' of varying length

app.get('/api/yuge', function yuge(req, res) {
  var uGenerator = Math.floor(Math.random()*100);
  var uString = new Array(uGenerator + 1).join("u");
  res.json({message: "y" + uString + "ge"});
});

// Build a wall

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

//Get tweets


/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
