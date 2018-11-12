const express=require('express');
var router=express.Router();
var pool=require('../pool');

router.get("/reclist",(req,res)=>{
    var sql = `select * from recommend where fid=1`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
router.get("/recmv",(req,res)=>{
    var sql = `select * from recommend where fid=2`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

module.exports=router;