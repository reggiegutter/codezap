

class ChatController {
  constructor({ socket, request }) {
    console.log("enctrou")
    this.socket = socket;
    this.request = request;
  }

  onMessage(message) {
    this.socket.broadcastToAll('message', message)
  }

  onClose() {
    console.log("enctrou")
  }

  onError() {
    console.log("enctrou")
  }
}

module.exports = ChatController;
