var express = require('express');
var router = express.Router();
var mongo=require('mongodb');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login',function(req,res){
    var email=req.body.email;
    var password=req.body.password;

    var queryObj={
      email: email,
      password: password
    }

    var mongoClient = mongo.MongoClient;
    var url = "mongodb+srv://manku:manku@cluster0-u9dbl.mongodb.net/test?retryWrites=true&w=majority"
    mongoClient.connect(url,{ useNewUrlParser: true },function(err,project){
         if(err){
             res.send('db connection err');
         }

         var db=project.db('bank');
         var collection=db.collection('users');
         collection.findOne(queryObj,function(e,s){
              if(e){
                  res.send(e);
              }else{
                  res.send(s);
              }
         }) 
    })
});


router.post('/register',function(req,res){
    var first_name = req.body.first_name;
    var middle_name = req.body.middle_name;
    var last_name = req.body.last_name;
    var mobile_number = req.body.mobile_number;
    var email = req.body.email;
    var password = req.body.password;



    var queryObj={
      first_name: first_name,
      middle_name: middle_name,
      last_name: last_name,
      mobile_number: mobile_number,
      email: email,
      password: password
    }

    var mongoClient = mongo.MongoClient;
    var url = "mongodb+srv://manku:manku@cluster0-u9dbl.mongodb.net/test?retryWrites=true&w=majority"
    mongoClient.connect(url,{ useNewUrlParser: true },function(err,project){
         if(err){
             res.send('db connection err');
         }

         var db=project.db('bank');
         var collection=db.collection('users');
         collection.insertOne(queryObj,function(e,s){
              if(e){
                  res.send(e);
              }else{
                  res.send(s);
              }
         }) 
    })
});

module.exports = router;
