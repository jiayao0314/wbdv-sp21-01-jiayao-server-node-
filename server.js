require('dotenv').config();
const express = require('express')
const app = express()
app.use(express.json())
let bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const mongoose = require('mongoose');
// <username>:<password>@<mongodbClusterName>/<db>
const uri = process.env.MONGODB_URI;
mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});

// configure CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});

require("./controllers/quizzes-controller")(app)
require("./controllers/question-controller")(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 3000)
console.log("running server.js")