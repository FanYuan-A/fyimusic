const express=require('express');
const bodyParser = require('body-parser');
const cors=require("cors");

var song=require('./routes/song')
var index=require('./routes/index')
var app=express();

app.listen(3000);
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname+"/public"));
app.use(cors({
    origin:["http://127.0.0.1:3000","http://localhost:3000","http://127.0.0.1:8080","http://localhost:8080"],credentials:true
}));


app.use('/song',song)
app.use('/index',index)