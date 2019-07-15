var express = require("express");
var path = require("path");
var PORT = 3000;
var app = express();
var reservations = [];
var waitlist = [];

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "home.html"));
})
app.get("/tables", function(req,res){
    res.sendFile(path.join(__dirname, "tables.html"));
})
app.get("/reserve", function(req,res){
    res.sendFile(path.join(__dirname, "reserve.html"));
})
app.post("/api/new", function(req,res){

    let currentRes = new Reservation(req.body.customerName,req.body.phoneNumber,req.body.customerEmail,req.body.customerID);
    
    if(reservations.length < 5){
        reservations.push(currentRes);
        res.send(true);
    }else{
        waitlist.push(currentRes);
        res.send(false);
    }
        
    console.log(reservations);
    console.log(waitlist);
    
})
app.listen(PORT,function(){
    console.log("Listening to PORT " + PORT)
})
//Reservation constructor
function Reservation(name,phone,email,id){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
}

module.exports = reservations, waitlist