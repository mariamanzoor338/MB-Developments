const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  heading: {
    type: String,
    maxlength: 60, 
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Career = mongoose.model('Career', careerSchema);

module.exports = Career;
