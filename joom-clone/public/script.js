const socket = io("/");
const videoGrid = document.querySelector("#video-grid");
const peers = {};

const myPeer = new Peer(undefined, {
  host: "/",
  port: "3001",
});
const myVideo = document.createElement("video");
myVideo.muted = true;

var getUserMedia =
  navigator.getUserMedia ||
  navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    audio: true,
  })
  .then((stream) => {
    addVideoStream(myVideo, stream);

    socket.on("user-connected", (userId) => {
      connectToNewUser(userId, stream);
    });
  });

myPeer.on("call", function (call) {
  getUserMedia({ video: true, audio: true }, function (stream) {
    call.answer(stream);
    const video = document.createElement("video");
    call.on("stream", function (remoteStream) {
      addVideoStream(video, remoteStream);
    });
  });
});

myPeer.on("open", (id) => {
  socket.emit("join-room", ROOM_ID, id);
});

socket.on("user-connected", (userId) => {
  console.log("User connectd :" + userId);
});

socket.on("user-disconnected", (userId) => {
  if (peers[userId]) {
    peers[userId].close();
  }
});

function connectToNewUser(userId, stream) {
  const call = myPeer.call(userId, stream);
  console.log("this is call ");
  const video = document.createElement("video");

  call.on("stream", (remoteStream) => {
    addVideoStream(video, remoteStream);
  });

  call.on("close", () => {
    video.remove();
  });

  peers[userId] = call;
}

function addVideoStream(video, stream) {
  console.log("add video stream");
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  console.log("video attached");
  videoGrid.append(video);
}
