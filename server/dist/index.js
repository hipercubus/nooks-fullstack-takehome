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
var usersList = [];
var currentVideoId;
io.on("connection", function (socket) {
    console.log("User connected");
    // When user signs in
    socket.on("client:join", function (user) {
        console.log("user joined", user, currentVideoId);
        usersList.push({ id: user.id, name: user.name });
        io.emit("server:updateUsers", {
            usersList: usersList,
            currentVideoId: currentVideoId,
            user: user
        });
        //TODO: Handle if a video is already added
        //TODO: When user disconnects
        socket.on("disconnect", function () {
            console.log("user disconnected", user);
            usersList.splice(usersList.findIndex(function (_user) { return user.id === _user.id; }), 1);
            if (usersList.length) {
                io.emit("server:userLeft", { usersList: usersList, user: user });
            }
            else {
                currentVideoId = null;
            }
        });
    });
    //TODO: When user adds video
    //TODO: When user closes video
    //TODO: When user plays video
    //TODO: When user pauses video
    //TODO: When user seeks video
});
server.listen(3001, function () {
    console.log("listening on *:3001");
});
