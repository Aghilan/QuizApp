'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  title: {
    type: String,
    Required: 'Kindly enter the title of the Question'
  },
  question: {
    type: String,
    Required: 'Kindly enter the url of the Question'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  options: {
    type: [{
      type: String,
    }],
    default: ['Option 1', 'Option 2']
  },
  image: {
    type: String,
    default: '#'       
  }
});

module.exports = mongoose.model('Question', QuestionSchema);
