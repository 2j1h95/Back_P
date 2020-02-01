const express = require("express");
const app = express();
let bodyParser  = require('body-parser');
let mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 80;

let router = require('./routes')(app)

let mongoose  = require('mongoose');

let db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("Connected to mongod server");
});

mongoose.connect('mongodb://mytoday.ml/timemanager');


let server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});