class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  onMessage(message) {
    console.log(message);
  }

  onClose() {}

  onError() {}
}

module.exports = ChatController;
