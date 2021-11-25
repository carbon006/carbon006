//jshint esversion:6
require('dotenv').config()
const express = require('express');
const bodyparser = require('body-parser');
const ejs = require('ejs');


const app = express()





app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine','ejs');


app.get('/',function(req,res){
  res.render('index')
})

app.get('/contact',function(req,res){
  res.render('contact')
})


app.get('/courses',function(req,res){
  res.render('courses')
})




app.get('/about-us',function(req,res){
  res.render('about-us')
})








app.listen(8080,function(){
  console.log('server started on port 3000');
})
