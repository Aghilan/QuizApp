var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Question = require('./api/models/questionModel'),
  bodyParser = require('body-parser');

var cors = require('cors')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Quizdb');

app.use(cors())

app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));

var routes = require('./api/routes/questionRoutes');
routes(app);

app.listen(port);

console.log('question RESTful API server started on: ' + port);
