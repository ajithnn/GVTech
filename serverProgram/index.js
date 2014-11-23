var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    bodyParser = require('body-parser')
var curValue = "none";

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/', function (req, res) {

  console.log(req.body.value);
  curValue = req.body.value;
  res.json("Got Request");

})

app.get('/', function (req, res) {

  if(curValue != "none"){
  res.send(curValue);
  curValue = "none";
}
else
{
res.send("none");
}
})

app.use(bodyParser.json());
//app.use(connect.bodyParser({strict: false}));
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})
