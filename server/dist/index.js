var express = require("express");
var app = express();
var http = require("http");
var server = http.createServer(app);
var Server = require("socket.io").Server;
app.get("/", function (req, res) {
    res.header("Access-Control-Allow-Origin", ["*"]);
    res.send("<h1>Server running!</h1>");
});
var io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.on("connection", function (socket) {
    console.log("User connected");
    //TODO: When user signs in
    //TODO: When user disconnects
    //TODO: When user adds video
    //TODO: When user closes video
    //TODO: When user plays video
    //TODO: When user pauses video
    //TODO: When user seeks video
});
server.listen(3001, function () {
    console.log("listening on *:3001");
});
