// TODO: review https://expressjs.com/
const express = require('express')
const app = express()
// app.use(express.json())

const mongoose = require('mongoose');
// <username>:<password>@<mongodbClusterName>/<db>
mongoose.connect('mongodb+srv://userWebdev:5610@clusterwebdevfinal.nlvkz.mongodb.net/whiteboard',
    {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
