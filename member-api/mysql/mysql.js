var express=require('express');
var mysql=require('mysql');
var pool=mysql.createPool({
        user:'root',
        database:'logindata'
});
module.exports=function(sql,arr,ck){
    pool.getConnection(function(err,con){
        if(err){
             return ck&&ck(err)
        }
        con.query(sql,arr,function(err,result,filed){
              if(err){
                  return ck&&ck(err)
              }
              ck&&ck(null,result,filed);
              con.release();
        })
    })
}