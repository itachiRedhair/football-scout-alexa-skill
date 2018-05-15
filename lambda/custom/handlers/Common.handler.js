const {
  setSession,
  getSession
} = require("./../utilities/helper/session.helper");

//response builders
const {
  createExitResponse,
  createHelpResponse
} = require("./../utilities/responseFactory/general.rfactory");

//constants
const intents = require("./../constants").intents;

//All unhandled request will get here
const StopHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    return (
      request.type === intents.type.IntentRequest &&
      (request.intent.name === intents.AMAZON.StopIntent ||
        request.intent.name === intents.AMAZON.CancelIntent)
    );
  },

  handle(handlerInput) {
    return createExitResponse(handlerInput);
  }
};

const HelpHandler = {
  canHandle(handlerInput) {
    const { request } = handlerInput.requestEnvelope;
    return (
      request.type === intents.type.IntentRequest &&
      request.intent.name === intents.AMAZON.HelpIntent
    );
  },

  handle(handlerInput) {
    return createHelpResponse(handlerInput);
  }
};

module.exports = { StopHandler, HelpHandler };
