var mongoose = require("mongoose");
mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL ||
                  "mongodb://localhost/personal-api");

module.exports.Visits = require("./places_visited");
module.exports.Volunteering = require("./volunteering");
