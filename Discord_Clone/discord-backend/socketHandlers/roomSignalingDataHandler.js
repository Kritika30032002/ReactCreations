const roomSignalingDataHandler = (socket, data) => {
  const { connUserSocketId, signal } = data;

  const signalingData = { signal, connUserSocketId: socket.id };
  socket.to(connUserSocketId).emit("conn-signal", signalingData);
};

module.exports = roomSignalingDataHandler;
