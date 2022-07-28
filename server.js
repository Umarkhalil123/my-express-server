const express= require("express");
const app = express();

app.get("/",function(req,res){
   res.send("Hello ");

});
app.get("/contact",function(req,res){
    res.send("contact us");
});
app.get ("/about",function(req,res){
    res.send("I own this website");
});
app.get("/hobbies", function(req,res){
    res.send("<h1>Gym</h1>");
});

app.listen(3000, function(){
    console.log("server start");
}); 