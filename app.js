const express = require("express");
const app = express();
let bodyParser  = require('body-parser');
let mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port = process.env.PORT || 8080;

let router = require('./routes')(app)

//몽고디비 서버 연결 부분
let db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    console.log("몽고디비 서버 연결 확인");
});

mongoose.connect('mongodb://mytoday.ml/timemanager');


let server = app.listen(port, function(){
 console.log("Express server has started on port " + port)
});
