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

io.on("connection", (socket) => {
  console.log("User connected");

  //TODO: When user signs in
  //TODO: When user disconnects
  //TODO: When user adds video
  //TODO: When user closes video
  //TODO: When user plays video
  //TODO: When user pauses video
  //TODO: When user seeks video
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
