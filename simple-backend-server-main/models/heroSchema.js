const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
  description: {
    type: String,
    maxlength: 180, 
    required: true,
  },
  punchLine: {
    type: String,
    maxlength: 50, 
    required: true,
  },
  heroImage: {
    type: String, 
    required: true,
  },
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
