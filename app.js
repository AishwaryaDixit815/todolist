const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js"); //requiring our own module

var items = ["Buy Food", "Cook Food", "Eat Food"]; // very initial contents of item
var work = [];

const app = express();
const port = process.env.PORT || 3000 ;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public")); //this line is added to tell express that the static files we are using in our project are placed in the "public" folder. Hence it gets the required file path.

app.set('view engine', 'ejs');

app.get("/", function(req, res){
    
    let day = date(); //adding parenthesis here, because we are activating the module's function over here.  
    res.render("list", {listTitle: day, newItems: items}); //the key value pairs to be passed to list.ejs.
});

app.post("/", function(req, res){ // after the user posts value through the form
  let item = req.body.newItem;

  if(req.body.button === "work"){ //check the button value, for determining which list is to be updated
    work.push(item);
    res.redirect("/work");
  }else{
    items.push(item); //item array now contains the inputted value even if the page is refeshed (until the code remains same and server is not closed. any changes made to the code and rerunning the server will delete the changes).
    res.redirect("/"); // we are redirected to the root route, and the list is displayed with the updated array
  }
})

app.get("/work", function(req, res){
  res.render("list", {listTitle : "work", newItems : work});
})

app.get("/about", function(req, res){
  res.render("about");
})

app.listen(port, function(){
  console.log("Server started on port 3000.");
});