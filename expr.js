var express=require("express");
var bodyparser=require("body-parser");
var path=require("path");
var ejs=require("ejs");

var app=express();

/*var logger=function(req,res,next){
  console.log("logging...");
  next();
}

app.use(logger);*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"public")));

/*var person=[{
  name:"sowrabh",
  age:20
},
{
  name:"ullal",
  age:"21"
}];*/

app.get("/",function(req,res){
//  res.send("welcome to express");
  res.send("hello world");
})

app.listen(8080,function(req,res){
  console.log("server started in port 8080");
})
