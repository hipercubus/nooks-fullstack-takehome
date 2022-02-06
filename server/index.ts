const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", ["*"]);
  res.send("<h1>Server running!</h1>");
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

type User = {
  id: string;
  name: string;
};
const usersList: User[] = [];
let currentVideoId: string;

io.on("connection", (socket) => {
  console.log("User connected");

  // When user signs in
  socket.on("client:join", (user) => {
    console.log("user joined", user, currentVideoId);
    usersList.push({ id: user.id, name: user.name });
    io.emit("server:updateUsers", {
      usersList,
      currentVideoId,
      user,
    });
    //TODO: Handle if a video is playing

    // When user disconnects
    socket.on("disconnect", () => {
      console.log("user disconnected", user);
      usersList.splice(
        usersList.findIndex((_user) => user.id === _user.id),
        1
      );
      if (usersList.length) {
        io.emit("server:userLeft", { usersList, user });
      } else {
        currentVideoId = null;
      }
    });
  });

  // When user adds video
  socket.on("client:setVideo", ({ user, videoId }) => {
    console.log("user set video", user, videoId);
    currentVideoId = videoId;
    socket.broadcast.emit("server:updateVideo", { user, currentVideoId });
  });

  // When user closes video
  socket.on("client:closeVideo", ({ user }) => {
    console.log("user close video", user);
    currentVideoId = null;
    socket.broadcast.emit("server:closeVideo", { user });
  });

  //TODO: When user plays video
  //TODO: When user pauses video
  //TODO: When user seeks video
  //TODO: Receive video position from poll
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
