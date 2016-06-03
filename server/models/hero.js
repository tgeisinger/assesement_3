var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HeroesSchema = new Schema({
  alias: String,
  first: String,
  last: String,
  city: String


});

var Hero = mongoose.model('Hero', HeroesSchema);

module.exports = Hero;
