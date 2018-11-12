const express=require('express');
var router=express.Router();
var pool=require('../pool');

router.get("/",(req,res)=>{
    var sql = `select * from song`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})
router.get("/list",(req,res)=>{
    var sql = `select * from songList`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

module.exports=router;