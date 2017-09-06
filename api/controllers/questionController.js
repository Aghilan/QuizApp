'use strict';

var mongoose = require('mongoose'),
    Question = mongoose.model('Question');

/*
Returns list of all questions
*/
exports.list_all_question = function(req, res) {
  Question.find({}, function(err, question) {
    if (err)
      res.send(err);
    res.status(200).send(question);
  });
};

/*
Creates a new question given its title, question and options and image
*/
exports.create_a_question = function(req, res) {
  var new_question = new Question(req.body);
  new_question.save(function(err, question) {
    if (err)
      res.send(err);
    res.status(200).send(question);
  });
};


/*
Prints information like title, question and options and image, given any question
*/
exports.read_a_question = function(req, res) {
  Question.findById(req.params.questionId, function(err, question) {
    if (err)
      res.send(err);
    // If the question is not available in the DB, return 404 error response
    if(question  == null){
      res.status(404).send({});
    }
    res.json(question);
  });
};

/*
Updates information like title, question and options and image, given any question
*/
exports.update_a_question = function(req, res) {
  var questionId = req.params.questionId || ''
  Question.findOneAndUpdate({_id: questionId}, req.body, {new: true}, function(err, question) {
    if (err)
      res.send(err);
    res.json(question);
  });
};

/*
Deletes the record of the question
*/
exports.delete_a_question = function(req, res) {
  console.log(req.body.questions);
  Question.remove({
    _id:{$in: req.body.questions }
  }, function(err, question) {
    if (err)
      return res.send(err);
    res.json(req.body.questions);
  });
};
