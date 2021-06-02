const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);

const { ExpressPeerServer } = require("peer");
const peerServer = ExpressPeerServer(server, {
  debug: true,
});


app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/peerjs", peerServer);

app.get("/", (req, rsp) => {
  rsp.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, rsp) => {
  rsp.render("room", { roomId: req.params.room });
});

io.on("connection", (socket) => {
  console.log("new");
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);
    console.log(socket.to(roomId).broadcast);
    socket.on("message", (message) => {
      io.to(roomId).emit("createMessage", message);
    });
    socket.on("disconnect", function () {
      socket.to(roomId).emit("user-disconnected", userId);
    });
  });
});
server.listen(process.env.PORT || 3030);
