var express = require("express")
var path = require("path")

var app = express()
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function Reservations(Name, Phone, Email, ID) {
    this.customerName = Name;
    this.phoneNumber = Phone;
    this.customerEmail = Email;
    this.customerID = ID
}

function Waitlist(Name, Phone, Email, ID) {
    this.customerName = Name;
    this.phoneNumber = Phone;
    this.customerEmail = Email;
    this.customerID = ID
}

var reservationsArr = []

reservationsArr.push(new Reservations("Dave Test", "4103335555", "davey@dave.com", "1"))

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"))
})

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"))
})

app.listen(PORT, function() {
    console.log("App listening on PORT + " + PORT)
})

