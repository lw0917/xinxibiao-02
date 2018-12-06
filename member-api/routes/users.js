var express = require('express');
var router = express.Router();
var query=require('../mysql/mysql');
/* GET users listing. */
   router.get('/api/userlist',function(req,res){
          query('SELECT * FROM `login` WHERE 1',function(err,result){
              if(err){
                  return res.json({code:1,msg:err});
              }
              res.json({code:0,msg:result});
          })
   })



module.exports = router;
