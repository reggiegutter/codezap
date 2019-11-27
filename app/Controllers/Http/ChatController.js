'use strict'
const AssistantV2 = require('ibm-watson/assistant/v2');
const { BasicAuthenticator } = require('ibm-watson/auth');
const Env = use('Env');

const assistant = new AssistantV2({
  version: '2019-02-01',
  authenticator: new BasicAuthenticator({
    username: Env.get('ASSISTANT_USERNAME'),
    password: Env.get('ASSISTANT_PASSWORD'),
  }),
  url: 'https://gateway.watsonplatform.net/assistant/api/',
});

class ChatController {
  async index() {
    const chat = await assistant.createSession({
      assistantId: 'f41fef2d-f817-4d45-9965-bb70dbfdac67',
    })
    return chat.result;
  }

  async create({ request }) {
    const post = request.all()
    const menssage = await assistant.message({
      assistantId: 'f41fef2d-f817-4d45-9965-bb70dbfdac67',
      sessionId: post.sessionId,
      input: {
        message_type: 'text',
        text: post.menssage
      }
    })
    return menssage.result;
  }
}

module.exports = ChatController
