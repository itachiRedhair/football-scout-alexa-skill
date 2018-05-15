//helper functions
const { randomize } = require("./../helper/random.helper");

//messages
const messages = require("./../../messages");

const createAllUnhandledResponse = handlerInput => {
  const response = handlerInput.responseBuilder;

  return response
    .speak(randomize[messages.ALL_UNHANDLED])
    .reprompt(randomize[messages.ALL_UNHANDLED])
    .getResponse();
};

module.exports = {
  createAllUnhandledResponse
};
