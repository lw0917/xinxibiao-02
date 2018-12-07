var express = require('express');
var router = express.Router();
var query=require('../mysql/mysql');
/* GET users listing. */
   router.get('/api/userlist',function(req,res){
       console.log(1)
          query('SELECT * FROM `login` WHERE 1',function(err,result){
              if(err){
                  return res.json({code:1,msg:err});
              }
              res.json({code:0,msg:result});
          })
   })

   //添加成员信息
 router.post('/api/add',function(req,res,next){
    var params = req.body,
        name = params.name,
        pass = params.pass,
        auth=params.auth;
    
    if(!name || !auth){
      res.json({code:2,msg:"姓名或身份证号不能为空"})
    }else{
      //查询成员是否存在
      queryIsHas();
      
    }
  
    //查询成员是否存在
    function queryIsHas(){
      query(sql.SELECT_ISHAS,[id_card],function(error,results){
        if(error){
          res.json({code:0,msg:error})
        }else{
          if(results.length){
            res.json({code:2,msg:'此用户已存在'})
          }else{
            addMember();
          }
        }
      })
    }
  
    //添加成员
    function addMember(){
      query(sql.ADD_MEMBER,[name,age,phone,address,id_card,date],function(error,results){
        if(error){
          res.json({code:0,msg:'服务器错误'})
        }else{
          res.json({code:1,msg:'添加成功'})
        }
      })
    }
  })



module.exports = router;
