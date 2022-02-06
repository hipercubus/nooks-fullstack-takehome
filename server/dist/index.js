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
        //TODO: Handle if a video is playing
        // When user disconnects
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
    // When user adds video
    socket.on("client:setVideo", function (_a) {
        var user = _a.user, videoId = _a.videoId;
        console.log("user set video", user, videoId);
        currentVideoId = videoId;
        socket.broadcast.emit("server:updateVideo", { user: user, currentVideoId: currentVideoId });
    });
    // When user closes video
    socket.on("client:closeVideo", function (_a) {
        var user = _a.user;
        console.log("user close video", user);
        currentVideoId = null;
        socket.broadcast.emit("server:closeVideo", { user: user });
    });
    //TODO: When user plays video
    //TODO: When user pauses video
    //TODO: When user seeks video
    //TODO: Receive video position from poll
});
server.listen(3001, function () {
    console.log("listening on *:3001");
});
