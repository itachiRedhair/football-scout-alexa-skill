//helper functions
const { randomize } = require("./../helper/random.helper");

//messages
const messages = require("./../../messages");

const createGreetingResponse = handlerInput => {
  const response = handlerInput.responseBuilder;

  return response
    .speak(
      randomize(messages.GREETING) +
        ` ` +
        randomize(messages.START_HELP_MESSAGE)
    )
    .reprompt(randomize(messages.START_HELP_MESSAGE))
    .getResponse();
};

const createExitResponse = handlerInput => {
  return handlerInput.responseBuilder
    .speak(randomize(messages.EXIT))
    .getResponse();
};

const createGenericErrorResponse = handlerInput => {
  const response = handlerInput.responseBuilder;

  return response
    .speak(randomize(messages.GENERIC_ERROR))
    .reprompt(randomize(messages.GENERIC_ERROR))
    .getResponse();
};

const createHelpResponse = handlerInput => {
  const response = handlerInput.responseBuilder;

  return response
    .speak(randomize(messages.INSTRUCTIONS))
    .reprompt(randomize(messages.INSTRUCTIONS))
    .getResponse();
};

module.exports = {
  createExitResponse,
  createGenericErrorResponse,
  createHelpResponse,
  createGreetingResponse
};
