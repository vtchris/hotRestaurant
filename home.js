// Require dependencies
var path = require("path");
var express = require("express");

// Set our port to 3000
var server = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
server.get("/home", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
server.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
server.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

//Starts our server.
server.listen(process.env.PORT || PORT, function () {
//server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});