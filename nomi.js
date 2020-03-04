var express=require('express')
var app=express()
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

const MongoClient = require('mongodb').MongoClient
  MongoClient.connect('mongodb+srv://parth:<GONDOLAS>@nom-qqkjg.mongodb.net/test?retryWrites=true&w=majority', (err, client) => {
   if(err) return console.log('Error in connecting')
  dbo=db.db('students')
   db = client.db('students') // whatever your database name is
  })
   app.post('/ratify', urlencodedParser, function (req, res) {
    var query={ dbo.IITK.aggregate([
      {
         $project: {
            ratifs: {
               $filter: {
                  input: "$items",
                  as: "item",
                  cond: { $gte: [ "$$status", 'false' ] }
               }
            }
         }
      }
   ])}
    dbo.IITK("<students><").find(query, { projection: { uname:0,phno:0 } }).toArray(function(err, result) {           //MAYBE AN ERROR LINE
        if (err) throw err;
        res.end(JSON.stringify(result));
 })
 
 app.post('/ratify_club',urlencodedParser , function(req , res) {
    var name=req.query.club_name
    var query={ dbo.IITK.aggregate([
      {
         $project: {
            ratifs: {
               $filter: {
                  input: "$items",
                  as: "item",
                  cond: { $gte:[ [ "$$status", 'false' ],["$$name",name]] }
               }
            }
         }
      }
   ])}
    db.IITK("<y}our database name></y}our>").find(query).toArray(function(err, result) {
        if (err) throw err;
        res.end(JSON.stringify(result));   

 })
 app.post('/update',urlencodedParser , function(req , res){
  var nam=req.body.name
  var code=req.body.code
  var stats=req.body.status
  var query={ dbo.IITK.aggregate([
   {
      $project: {
         ratifs: {
            $filter: {
               input: "$items",
               as: "item",
               cond: { $gte:[ [ "$$status", 'stats' ],["$$name",name],["$$code",code]] }
            }
         }
      }
   }
])}
  var newvalues = { $set: { ratifs[].status: stat } };
  db.IITK("customers").updateOne(query, newvalues, function(err, res) {
      if(err) console.log('Error')
  })

   })

 var server = app.listen(8081, function () {     // ENTER THE DESIRED PORT NUMBER
    var host = server.address().address
    var port = server.address().port
    
    console.log("API listening at http://%s:%s", host, port)
 })