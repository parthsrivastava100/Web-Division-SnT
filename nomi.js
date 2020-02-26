var express=require('express')
var app=express()
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const MongoClient = require('mongodb').MongoClient
  MongoClient.connect('your-mongodb-url', (err, client) => {
   if(err) return console.log('Error')
   db = client.db('star-wars') // whatever your database name is
  })

  app.post('/ratify', urlencodedParser, function (req, res) {
    var query={ status:false}
    db.collection("<Your Database Name><").find(query, { projection: { uname:0,phno:0,ratifs{}.code:0 } }).toArray(function(err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));
 })
 app.post('/ratify_club',urlencodedParser , function(req , res) {
    var name=req.query.club_name
     query = { body: name , status:false };
    db.collection("<y}our database name></y}our>").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));   

 })
 app.post('/update',urlencodedParser , function(req , res){
  var nam=req.body.name
  var code=req.body.code
  var stat=req.body.status
  var myquery={name:nam,ratify{}.code:code,ratify{}.status:stat}
  var newvalues = { $set: { ratify{}.status: stat } };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
      if(err) console.log('Error')
  }

 })

 var server = app.listen(8081, function () {     // ENTER THE DESIRED PORT NUMBER
    var host = server.address().address
    var port = server.address().port
    
    console.log("API listening at http://%s:%s", host, port)
 })